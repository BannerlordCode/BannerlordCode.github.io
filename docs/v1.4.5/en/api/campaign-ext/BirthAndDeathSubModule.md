<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BirthAndDeathSubModule`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BirthAndDeathSubModule

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BirthAndDeathSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Bannerlord.Source/Modules.BirthAndDeath/TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath/BirthAndDeathSubModule.cs`

## Overview

`BirthAndDeathSubModule` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new BirthAndDeathSubModule();
```

## See Also

- [Complete Class Catalog](../catalog)