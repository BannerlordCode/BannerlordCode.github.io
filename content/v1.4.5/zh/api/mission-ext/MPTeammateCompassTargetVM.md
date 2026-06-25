---
title: "MPTeammateCompassTargetVM"
description: "MPTeammateCompassTargetVM 的自动生成类参考。"
---
# MPTeammateCompassTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPTeammateCompassTargetVM : CompassTargetVM`
**Base:** `CompassTargetVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/MPTeammateCompassTargetVM.cs`

## 概述

`MPTeammateCompassTargetVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MPTeammateCompassTargetVM
`public unsafe MPTeammateCompassTargetVM(TargetIconType iconType, uint color, uint color2, Banner banner, bool isAlly)`

**用途 / Purpose:** 调用 MPTeammateCompassTargetVM 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPTeammateCompassTargetVM 实例
MPTeammateCompassTargetVM mPTeammateCompassTargetVM = ...;
var result = mPTeammateCompassTargetVM.MPTeammateCompassTargetVM(iconType, 0, 0, banner, false);
```

### RefreshTargetIconType
`public unsafe void RefreshTargetIconType(TargetIconType targetIconType)`

**用途 / Purpose:** 使 target icon type 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPTeammateCompassTargetVM 实例
MPTeammateCompassTargetVM mPTeammateCompassTargetVM = ...;
mPTeammateCompassTargetVM.RefreshTargetIconType(targetIconType);
```

### RefreshTeam
`public void RefreshTeam(Banner banner, bool isAlly)`

**用途 / Purpose:** 使 team 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPTeammateCompassTargetVM 实例
MPTeammateCompassTargetVM mPTeammateCompassTargetVM = ...;
mPTeammateCompassTargetVM.RefreshTeam(banner, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPTeammateCompassTargetVM mPTeammateCompassTargetVM = ...;
mPTeammateCompassTargetVM.MPTeammateCompassTargetVM(iconType, 0, 0, banner, false);
```

## 参见

- [本区域目录](../)