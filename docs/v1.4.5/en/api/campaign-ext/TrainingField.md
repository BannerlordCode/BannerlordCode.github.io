<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrainingField`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TrainingField

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class TrainingField : SettlementComponent`
**Base:** `SettlementComponent`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode/TrainingField.cs`

## Overview

`TrainingField` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new TrainingField();
value.Deserialize(objectManager, node);
```

## See Also

- [Complete Class Catalog](../catalog)