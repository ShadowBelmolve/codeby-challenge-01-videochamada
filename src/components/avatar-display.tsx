type Props = {
    selectedAvatar: JSX.Element;
    className?: string;
    onEdit?: () => void;
};
export default function AvatarDisplay({ selectedAvatar, className, onEdit }: Props) {
    return <div className={`display-avatar-main ${className || 'h-64 w-64'}`}>
        <div className="display-avatar-image">
            {selectedAvatar}
        </div>
        {onEdit && 
            <div className="display-avatar-edit" onClick={() => onEdit()}>
                <svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.7715 11.9537L27.0435 4.2278L30.136 1.13743C31.5129 -0.239475 34.6666 -0.512669 36.3167 1.13743L37.8618 2.68261C39.5119 4.33271 39.2409 7.48647 37.8618 8.86555L34.7715 11.9537ZM31.6812 15.0463L10.0446 36.6833L0 39L2.31664 28.9552L23.9532 7.31818L31.6812 15.0463Z" fill="white"/>
                </svg>
            </div>
        }
    </div>
}