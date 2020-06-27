import React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { ChoiceGroup } from '@fluentui/react/lib/ChoiceGroup';
import { ComboBox } from '@fluentui/react/lib/ComboBox';
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Label } from '@fluentui/react/lib/Label';
import { Link } from '@fluentui/react/lib/Link';
import { Rating } from '@fluentui/react/lib/Rating';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Slider } from '@fluentui/react/lib/Slider';
import { SpinButton } from '@fluentui/react/lib/SpinButton';
import { MaskedTextField } from '@fluentui/react/lib/TextField';
import { Toggle } from '@fluentui/react/lib/Toggle';

function App() {
  return (
    <div>
      <PrimaryButton>Primart button</PrimaryButton>

      <Checkbox>Checkbox</Checkbox>

      <ChoiceGroup></ChoiceGroup>

      <ComboBox></ComboBox>

      <Dropdown></Dropdown>

      <Label>Label</Label>

      <Link>Link</Link>

      <Rating></Rating>

      <SearchBox
        placeholder="Search with no animation"
        onSearch={(newValue) => console.log('value is ' + newValue)}
        disableAnimation
      />

      <Slider />

      <SpinButton
        defaultValue="0"
        label={'Basic SpinButton:'}
        min={0}
        max={100}
        step={1}
        iconProps={{ iconName: 'IncreaseIndentLegacy' }}
        incrementButtonAriaLabel={'Increase value by 1'}
        decrementButtonAriaLabel={'Decrease value by 1'}
      />

      <MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" />

      <Toggle
        label="Enabled and checked"
        defaultChecked
        onText="On"
        offText="Off"
        // onChange={_onChange}
      />
    </div>
  );
}

export default App;
