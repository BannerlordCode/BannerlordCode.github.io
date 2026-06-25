---
title: "ILocatable"
description: "Auto-generated class reference for ILocatable."
---
# ILocatable

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal interface ILocatable<T>`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Map/ILocatable.cs`

## Overview

`ILocatable` lives in `TaleWorlds.CampaignSystem.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IILocatable service = ...;
```

## See Also

- [Area Index](../)