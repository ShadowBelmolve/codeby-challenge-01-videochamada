import React, { useState } from 'react';
import AvatarDisplay from './avatar-display';
import { Avatar1, Avatar2, Avatar3, Avatar4 } from './avatars';

const ICONS = [<Avatar1 />, <Avatar2 />, <Avatar3 />, <Avatar4 />];
const LIST_ICONS: JSX.Element[] = [];
for (let i = 0; i < 10; i++) {
    LIST_ICONS.push(...ICONS);
}

type Props = {
    idx?: number;
    onSelect: (avatar: JSX.Element, idx: number) => void;
}
export default function AvatarSelector({ onSelect, idx }: Props) {
    const [selected, setSelected] = useState(idx || 0);

    return <div className="avatar-selector">
        <h3 className="h3 bold">AVATAR</h3>
        <div className="avatar-selector-icons">
            {LIST_ICONS.map((icon, idx) => <React.Fragment key={idx}>
                <div
                    className={`avatar-selector-icon ${idx === selected ? 'selected' : ''}`}
                    onClick={() => setSelected(idx)}
                >
                    <AvatarDisplay className="w-32 h-32" selectedAvatar={icon} />
                </div>
            </React.Fragment>)}
        </div>
        <button
            className="button-avatar-selector h5 bold"
            onClick={() => onSelect(LIST_ICONS[selected], selected)}
        >
            CONFIRMAR
        </button>
    </div>;
}