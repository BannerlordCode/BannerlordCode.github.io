---
title: "EncyclopediaListViewDataController"
description: "Auto-generated class reference for EncyclopediaListViewDataController."
---
# EncyclopediaListViewDataController

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class EncyclopediaListViewDataController`
**Base:** none
**File:** `SandBox.GauntletUI/Encyclopedia/EncyclopediaListViewDataController.cs`

## Overview

`EncyclopediaListViewDataController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `EncyclopediaListViewDataController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SaveListData
`public void SaveListData(EncyclopediaListVM list, string id)`

**Purpose:** Writes list data to persistent storage or a stream.

```csharp
// Obtain an instance of EncyclopediaListViewDataController from the subsystem API first
EncyclopediaListViewDataController encyclopediaListViewDataController = ...;
encyclopediaListViewDataController.SaveListData(list, "example");
```

### LoadListData
`public void LoadListData(EncyclopediaListVM list)`

**Purpose:** Reads list data from persistent storage or a stream.

```csharp
// Obtain an instance of EncyclopediaListViewDataController from the subsystem API first
EncyclopediaListViewDataController encyclopediaListViewDataController = ...;
encyclopediaListViewDataController.LoadListData(list);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<EncyclopediaListViewDataController>();
```

## See Also

- [Area Index](../)