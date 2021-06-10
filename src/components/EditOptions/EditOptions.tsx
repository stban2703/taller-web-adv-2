import React from 'react';
import { furOptions } from '../../containers/Creator/initialCreatorOptions';
import { EditSection } from '../EditSection/EditSection';
import { OptionList } from '../OptionList/OptionList';
import "./EditOptions.css";

interface EditOptionsProps {
    currentTab: string;
}

export const EditOptions: React.FC<EditOptionsProps> = ({ currentTab }) => {
    return (
        <section className="EditOptions">
            <h2 className="EditOptions__title">Test Title</h2>
            {
                currentTab === "fur" && 
                <EditSection title="Pattern">
                    <OptionList currentValue="" itemList={furOptions}/>
                </EditSection>
            }
        </section>
    )
}