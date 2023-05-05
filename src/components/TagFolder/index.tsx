import { ReactNode } from 'react'
import { TagFolderDiv } from './styles';

interface TagFolderProps {
    arrowIcon: ReactNode;
    techIcon: ReactNode;
    title: string;
}

export default function TagFolder({ arrowIcon, techIcon, title }: TagFolderProps) {
    return (
        <TagFolderDiv>
            {arrowIcon}
            {techIcon}
            <span>{title}</span>
        </TagFolderDiv>
    )
}