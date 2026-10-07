---
title: "CaravanHelper"
description: "Auto-generated class reference for CaravanHelper."
---
# CaravanHelper

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CaravanHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/CaravanHelper.cs`

## Overview

`CaravanHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CaravanHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRandomCaravanTemplate
`public static PartyTemplateObject GetRandomCaravanTemplate(CultureObject culture, bool isElite, bool isLand)`

**Purpose:** Reads and returns the random caravan template value held by the this instance.

```csharp
// Static call; no instance required
CaravanHelper.GetRandomCaravanTemplate(culture, false, false);
```

## Usage Example

```csharp
CaravanHelper.Initialize();
```

## See Also

- [Area Index](../)