---
title: "GameMenuPlunderItemVM"
description: "Auto-generated class reference for GameMenuPlunderItemVM."
---
# GameMenuPlunderItemVM

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuPlunderItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs`

## Overview

`GameMenuPlunderItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |

## Key Methods

### ExecuteBeginTooltip
`public void ExecuteBeginTooltip()`

**Purpose:** Runs the operation or workflow associated with begin tooltip.

```csharp
// Obtain an instance of GameMenuPlunderItemVM from the subsystem API first
GameMenuPlunderItemVM gameMenuPlunderItemVM = ...;
gameMenuPlunderItemVM.ExecuteBeginTooltip();
```

### ExecuteEndTooltip
`public void ExecuteEndTooltip()`

**Purpose:** Runs the operation or workflow associated with end tooltip.

```csharp
// Obtain an instance of GameMenuPlunderItemVM from the subsystem API first
GameMenuPlunderItemVM gameMenuPlunderItemVM = ...;
gameMenuPlunderItemVM.ExecuteEndTooltip();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenuPlunderItemVM gameMenuPlunderItemVM = ...;
gameMenuPlunderItemVM.ExecuteBeginTooltip();
```

## See Also

- [Area Index](../)