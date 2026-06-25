---
title: "EducationCampaignBehavior"
description: "Auto-generated class reference for EducationCampaignBehavior."
---
# EducationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`

## Overview

`EducationCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PageCount` | `public int PageCount { get; }` |
| `Options` | `public IEnumerable<EducationCampaignBehavior.EducationOption> Options { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.SyncData(dataStore);
```

### GetOptionProperties
`public void GetOptionProperties(Hero child, string optionKey, List<string> previousOptions, out TextObject optionTitle, out TextObject description, out TextObject effect, out ValueTuple<CharacterAttribute, int> attributes, out ValueTuple<SkillObject, int> skills, out ValueTuple<SkillObject, int> focusPoints, out EducationCampaignBehavior.EducationCharacterProperties educationCharacterProperties)`

**Purpose:** Reads and returns the option properties value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.GetOptionProperties(child, "example", previousOptions, optionTitle, description, effect, valueTuple<CharacterAttribute, 0, valueTuple<SkillObject, 0, valueTuple<SkillObject, 0, educationCharacterProperties);
```

### GetPageProperties
`public void GetPageProperties(Hero child, List<string> previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCampaignBehavior.EducationCharacterProperties defaultCharacterProperties, out string availableOptions)`

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

### OnConsequence
`public void OnConsequence(Hero child)`

**Purpose:** Invoked when the consequence event is raised.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.OnConsequence(child);
```

### EducationOptionConditionDelegate
`public delegate bool EducationOptionConditionDelegate(EducationCampaignBehavior.EducationOption option, List<EducationCampaignBehavior.EducationOption> previousOptions)`

**Purpose:** Executes the EducationOptionConditionDelegate logic.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationOptionConditionDelegate(option, previousOptions);
```

### EducationOptionConsequenceDelegate
`public delegate bool EducationOptionConsequenceDelegate(EducationCampaignBehavior.EducationOption option)`

**Purpose:** Executes the EducationOptionConsequenceDelegate logic.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationOptionConsequenceDelegate(option);
```

### AddPage
`public EducationCampaignBehavior.EducationPage AddPage(int pageIndex, TextObject title, TextObject description, TextObject instruction, EducationCampaignBehavior.EducationCharacterProperties childProperties = default(EducationCampaignBehavior.EducationCharacterProperties), EducationCampaignBehavior.EducationCharacterProperties specialCharacterProperties = default(EducationCampaignBehavior.EducationCharacterProperties), EducationCampaignBehavior.EducationPage.EducationPageConditionDelegate condition = null)`

**Purpose:** Adds page to the current collection or state.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.AddPage(0, title, description, instruction, default(EducationCampaignBehavior.EducationCharacterProperties), default(EducationCampaignBehavior.EducationCharacterProperties), null);
```

### GetOption
`public EducationCampaignBehavior.EducationOption GetOption(string optionKey)`

**Purpose:** Reads and returns the option value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetOption("example");
```

### GetPage
`public EducationCampaignBehavior.EducationPage GetPage(List<string> previousOptionKeys)`

**Purpose:** Reads and returns the page value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetPage(previousOptionKeys);
```

### StringIdToEducationOption
`public List<EducationCampaignBehavior.EducationOption> StringIdToEducationOption(List<string> previousOptionKeys)`

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

### Equals
`public bool Equals(EducationCampaignBehavior.EducationCharacterProperties other)`

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

### AddOption
`public void AddOption(EducationCampaignBehavior.EducationOption option)`

**Purpose:** Adds option to the current collection or state.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.AddOption(option);
```

### GetOption
`public EducationCampaignBehavior.EducationOption GetOption(string optionKey)`

**Purpose:** Reads and returns the option value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetOption("example");
```

### GetAvailableOptions
`public string GetAvailableOptions(List<EducationCampaignBehavior.EducationOption> previousEducationOptions)`

**Purpose:** Reads and returns the available options value held by the this instance.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetAvailableOptions(previousEducationOptions);
```

### EducationPageConditionDelegate
`public delegate bool EducationPageConditionDelegate(EducationCampaignBehavior.EducationPage page, List<EducationCampaignBehavior.EducationOption> previousOptions)`

**Purpose:** Executes the EducationPageConditionDelegate logic.

```csharp
// Obtain an instance of EducationCampaignBehavior from the subsystem API first
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationPageConditionDelegate(page, previousOptions);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)