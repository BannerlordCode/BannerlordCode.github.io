---
title: "EducationCampaignBehavior"
description: "Auto-generated class reference for EducationCampaignBehavior."
---
# EducationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/EducationCampaignBehavior.cs`

## Overview

`EducationCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EducationOptionConditionDelegate
`public delegate bool EducationOptionConditionDelegate(EducationOption option, List<EducationOption> previousOptions)`

**Purpose:** Executes the EducationOptionConditionDelegate logic.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationOptionConditionDelegate(option, previousOptions);
```

### EducationOptionConsequenceDelegate
`public delegate bool EducationOptionConsequenceDelegate(EducationOption option)`

**Purpose:** Executes the EducationOptionConsequenceDelegate logic.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationOptionConsequenceDelegate(option);
```

### OnConsequence
`public void OnConsequence(Hero child)`

**Purpose:** Invoked when the consequence event is raised.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.OnConsequence(child);
```

### AddPage
`public EducationPage AddPage(int pageIndex, TextObject title, TextObject description, TextObject instruction, EducationCharacterProperties childProperties = default(EducationCharacterProperties), EducationCharacterProperties specialCharacterProperties = default(EducationCharacterProperties), EducationPage.EducationPageConditionDelegate condition = null)`

**Purpose:** Adds page to the current collection or state.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.AddPage(0, title, description, instruction, default(EducationCharacterProperties), default(EducationCharacterProperties), null);
```

### GetOption
`public EducationOption GetOption(string optionKey)`

**Purpose:** Reads and returns the option value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetOption("example");
```

### GetPage
`public EducationPage GetPage(List<string> previousOptionKeys)`

**Purpose:** Reads and returns the page value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetPage(previousOptionKeys);
```

### StringIdToEducationOption
`public List<EducationOption> StringIdToEducationOption(List<string> previousOptionKeys)`

**Purpose:** Executes the StringIdToEducationOption logic.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.StringIdToEducationOption(previousOptionKeys);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.ToString();
```

### EducationCharacterProperties
`public struct EducationCharacterProperties(CharacterObject character, Equipment equipment, string actionId, string prefabId, bool useOffHand)`

**Purpose:** Executes the EducationCharacterProperties logic.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationCharacterProperties(character, equipment, "example", "example", false);
```

### Equals
`public bool Equals(EducationCharacterProperties other)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.Equals(other);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetHashCode();
```

### GetUsedHandBoneIndex
`public sbyte GetUsedHandBoneIndex()`

**Purpose:** Reads and returns the used hand bone index value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetUsedHandBoneIndex();
```

### EducationPageConditionDelegate
`public delegate bool EducationPageConditionDelegate(EducationPage page, List<EducationOption> previousOptions)`

**Purpose:** Executes the EducationPageConditionDelegate logic.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationPageConditionDelegate(page, previousOptions);
```

### AddOption
`public void AddOption(EducationOption option)`

**Purpose:** Adds option to the current collection or state.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.AddOption(option);
```

### GetOption
`public EducationOption GetOption(string optionKey)`

**Purpose:** Reads and returns the option value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetOption("example");
```

### GetAvailableOptions
`public string GetAvailableOptions(List<EducationOption> previousEducationOptions)`

**Purpose:** Reads and returns the available options value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetAvailableOptions(previousEducationOptions);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.RegisterEvents();
```

### GetOptionProperties
`public void GetOptionProperties(Hero child, string optionKey, List<string> previousOptions, out TextObject optionTitle, out TextObject description, out TextObject effect, out (CharacterAttribute, int) attributes, out (SkillObject, int) skills, out (SkillObject, int) focusPoints, out EducationCharacterProperties educationCharacterProperties)`

**Purpose:** Reads and returns the option properties value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.GetOptionProperties(child, "example", previousOptions, optionTitle, description, effect, (CharacterAttribute, 0, (SkillObject, 0, (SkillObject, 0, educationCharacterProperties);
```

### GetPageProperties
`public void GetPageProperties(Hero child, List<string> previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCharacterProperties defaultCharacterProperties, out string availableOptions)`

**Purpose:** Reads and returns the page properties value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.GetPageProperties(child, previousChoices, title, description, instruction, defaultCharacterProperties, availableOptions);
```

### IsValidEducationNotification
`public bool IsValidEducationNotification(EducationMapNotification data)`

**Purpose:** Determines whether the this instance is in the valid education notification state or condition.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.IsValidEducationNotification(data);
```

### GetStageProperties
`public void GetStageProperties(Hero child, out int pageCount)`

**Purpose:** Reads and returns the stage properties value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.GetStageProperties(child, pageCount);
```

### Finalize
`public void Finalize(Hero child, List<string> chosenOptions)`

**Purpose:** Performs cleanup work when the object is garbage collected (usually for unmanaged resources).

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.Finalize(child, chosenOptions);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.EducationOptionConditionDelegate(option, previousOptions);
```

## See Also

- [Area Index](../)