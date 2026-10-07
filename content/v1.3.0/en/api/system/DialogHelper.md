---
title: "DialogHelper"
description: "Auto-generated class reference for DialogHelper."
---
# DialogHelper

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DialogHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/DialogHelper.cs`

## Overview

`DialogHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `DialogHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetDialogString
`public static void SetDialogString(string stringVariable, string gameTextId)`

**Purpose:** Assigns a new value to dialog string and updates the object's internal state.

```csharp
// Static call; no instance required
DialogHelper.SetDialogString("example", "example");
```

## Usage Example

```csharp
DialogHelper.Initialize();
```

## See Also

- [Area Index](../)