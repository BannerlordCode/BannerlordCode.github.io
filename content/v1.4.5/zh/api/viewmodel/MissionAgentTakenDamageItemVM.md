---
title: "MissionAgentTakenDamageItemVM"
description: "MissionAgentTakenDamageItemVM 的自动生成类参考。"
---
# MissionAgentTakenDamageItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentTakenDamageItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionAgentTakenDamageItemVM.cs`

## 概述

`MissionAgentTakenDamageItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Damage` | `public int Damage { get; set; }` |
| `IsRanged` | `public bool IsRanged { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `ScreenPosOfAffectorAgent` | `public Vec2 ScreenPosOfAffectorAgent { get; set; }` |

## 主要方法

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 remove 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionAgentTakenDamageItemVM 实例
MissionAgentTakenDamageItemVM missionAgentTakenDamageItemVM = ...;
missionAgentTakenDamageItemVM.ExecuteRemove();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionAgentTakenDamageItemVM missionAgentTakenDamageItemVM = ...;
missionAgentTakenDamageItemVM.ExecuteRemove();
```

## 参见

- [本区域目录](../)