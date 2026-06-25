---
title: "BannerIconVM"
description: "Auto-generated class reference for BannerIconVM."
---
# BannerIconVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.BannerEditor
**Module:** TaleWorlds.Core
**Type:** `public class BannerIconVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.BannerEditor/BannerIconVM.cs`

## Overview

`BannerIconVM` lives in `TaleWorlds.Core.ViewModelCollection.BannerEditor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.BannerEditor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IconID` | `public int IconID { get; set; }` |
| `IconPath` | `public string IconPath { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### ExecuteSelectIcon
`public void ExecuteSelectIcon()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select icon.

```csharp
// Obtain an instance of BannerIconVM from the subsystem API first
BannerIconVM bannerIconVM = ...;
bannerIconVM.ExecuteSelectIcon();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerIconVM bannerIconVM = ...;
bannerIconVM.ExecuteSelectIcon();
```

## See Also

- [Area Index](../)