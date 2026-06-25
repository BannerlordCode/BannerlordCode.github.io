---
title: "MPPlayerVM"
description: "MPPlayerVM 的自动生成类参考。"
---
# MPPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPlayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MPPlayerVM.cs`

## 概述

`MPPlayerVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Peer` | `public MissionPeer Peer { get; }` |
| `Gold` | `public int Gold { get; set; }` |
| `ValuePercent` | `public int ValuePercent { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CultureID` | `public string CultureID { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsValueEnabled` | `public bool IsValueEnabled { get; set; }` |
| `HasSetCompassElement` | `public bool HasSetCompassElement { get; set; }` |
| `IsSpawnActive` | `public bool IsSpawnActive { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `CompassElement` | `public MPTeammateCompassTargetVM CompassElement { get; set; }` |
| `Avatar` | `public PlayerAvatarImageIdentifierVM Avatar { get; set; }` |
| `Preview` | `public MPArmoryHeroPreviewVM Preview { get; set; }` |
| `ActivePerks` | `public MBBindingList<MPPerkVM> ActivePerks { get; set; }` |

## 主要方法

### UpdateDisabled
`public void UpdateDisabled()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 disabled 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.UpdateDisabled();
```

### RefreshDivision
`public void RefreshDivision(bool useCultureColors = false)`

**用途 / Purpose:** **用途 / Purpose:** 使 division 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshDivision(false);
```

### RefreshGold
`public void RefreshGold()`

**用途 / Purpose:** **用途 / Purpose:** 使 gold 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshGold();
```

### RefreshTeam
`public void RefreshTeam()`

**用途 / Purpose:** **用途 / Purpose:** 使 team 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshTeam();
```

### RefreshProperties
`public void RefreshProperties()`

**用途 / Purpose:** **用途 / Purpose:** 使 properties 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshProperties();
```

### RefreshPreview
`public void RefreshPreview(BasicCharacterObject character, DynamicBodyProperties dynamicBodyProperties, bool isFemale)`

**用途 / Purpose:** **用途 / Purpose:** 使 preview 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshPreview(character, dynamicBodyProperties, false);
```

### RefreshActivePerks
`public void RefreshActivePerks()`

**用途 / Purpose:** **用途 / Purpose:** 使 active perks 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshActivePerks();
```

### RefreshAvatar
`public void RefreshAvatar()`

**用途 / Purpose:** **用途 / Purpose:** 使 avatar 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshAvatar();
```

### ExecuteFocusBegin
`public void ExecuteFocusBegin()`

**用途 / Purpose:** **用途 / Purpose:** 执行 focus begin 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.ExecuteFocusBegin();
```

### ExecuteFocusEnd
`public void ExecuteFocusEnd()`

**用途 / Purpose:** **用途 / Purpose:** 执行 focus end 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPPlayerVM 实例
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.ExecuteFocusEnd();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.UpdateDisabled();
```

## 参见

- [本区域目录](../)