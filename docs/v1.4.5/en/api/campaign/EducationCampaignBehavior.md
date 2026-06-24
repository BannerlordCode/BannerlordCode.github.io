<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EducationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/EducationCampaignBehavior.cs`

## Overview

`EducationCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EducationOptionConditionDelegate
`public delegate bool EducationOptionConditionDelegate(EducationOption option, List<EducationOption> previousOptions)`

**Purpose:** Handles logic related to `education option condition delegate`.

### EducationOptionConsequenceDelegate
`public delegate bool EducationOptionConsequenceDelegate(EducationOption option)`

**Purpose:** Handles logic related to `education option consequence delegate`.

### OnConsequence
`public void OnConsequence(Hero child)`

**Purpose:** Called when the `consequence` event is raised.

### AddPage
`public EducationPage AddPage(int pageIndex, TextObject title, TextObject description, TextObject instruction, EducationCharacterProperties childProperties = default(EducationCharacterProperties), EducationCharacterProperties specialCharacterProperties = default(EducationCharacterProperties), EducationPage.EducationPageConditionDelegate condition = null)`

**Purpose:** Adds `page` to the current collection or state.

### GetOption
`public EducationOption GetOption(string optionKey)`

**Purpose:** Gets the current value of `option`.

### GetPage
`public EducationPage GetPage(List<string> previousOptionKeys)`

**Purpose:** Gets the current value of `page`.

### StringIdToEducationOption
`public List<EducationOption> StringIdToEducationOption(List<string> previousOptionKeys)`

**Purpose:** Handles logic related to `string id to education option`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### EducationCharacterProperties
`public struct EducationCharacterProperties(CharacterObject character, Equipment equipment, string actionId, string prefabId, bool useOffHand)`

**Purpose:** Handles logic related to `education character properties`.

### Equals
`public bool Equals(EducationCharacterProperties other)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetUsedHandBoneIndex
`public sbyte GetUsedHandBoneIndex()`

**Purpose:** Gets the current value of `used hand bone index`.

### EducationPageConditionDelegate
`public delegate bool EducationPageConditionDelegate(EducationPage page, List<EducationOption> previousOptions)`

**Purpose:** Handles logic related to `education page condition delegate`.

### AddOption
`public void AddOption(EducationOption option)`

**Purpose:** Adds `option` to the current collection or state.

### GetOption
`public EducationOption GetOption(string optionKey)`

**Purpose:** Gets the current value of `option`.

### GetAvailableOptions
`public string GetAvailableOptions(List<EducationOption> previousEducationOptions)`

**Purpose:** Gets the current value of `available options`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### GetOptionProperties
`public void GetOptionProperties(Hero child, string optionKey, List<string> previousOptions, out TextObject optionTitle, out TextObject description, out TextObject effect, out (CharacterAttribute, int) attributes, out (SkillObject, int) skills, out (SkillObject, int) focusPoints, out EducationCharacterProperties educationCharacterProperties)`

**Purpose:** Gets the current value of `option properties`.

### GetPageProperties
`public void GetPageProperties(Hero child, List<string> previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCharacterProperties defaultCharacterProperties, out string availableOptions)`

**Purpose:** Gets the current value of `page properties`.

### IsValidEducationNotification
`public bool IsValidEducationNotification(EducationMapNotification data)`

**Purpose:** Handles logic related to `is valid education notification`.

### GetStageProperties
`public void GetStageProperties(Hero child, out int pageCount)`

**Purpose:** Gets the current value of `stage properties`.

### Finalize
`public void Finalize(Hero child, List<string> chosenOptions)`

**Purpose:** Handles logic related to `finalize`.

## Usage Example

```csharp
var value = new EducationCampaignBehavior();
value.EducationOptionConditionDelegate(option, previousOptions);
```

## See Also

- [Complete Class Catalog](../catalog)