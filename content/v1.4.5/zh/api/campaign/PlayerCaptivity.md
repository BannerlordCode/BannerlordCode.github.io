---
title: "PlayerCaptivity"
description: "PlayerCaptivity 的自动生成类参考。"
---
# PlayerCaptivity

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerCaptivity`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/PlayerCaptivity.cs`

## 概述

`PlayerCaptivity` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaptorParty` | `public static PartyBase CaptorParty { get; set; }` |
| `RandomNumber` | `public static float RandomNumber { get; set; }` |
| `LastCheckTime` | `public static CampaignTime LastCheckTime { get; set; }` |

## 主要方法

### StartCaptivity
`public static void StartCaptivity(PartyBase captorParty)`

**用途 / Purpose:** 启动「captivity」流程或状态机。

```csharp
// 静态调用，不需要实例
PlayerCaptivity.StartCaptivity(captorParty);
```

### OnPlayerCharacterChanged
`public static void OnPlayerCharacterChanged()`

**用途 / Purpose:** 在 「player character changed」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
PlayerCaptivity.OnPlayerCharacterChanged();
```

### SetRansomAmount
`public void SetRansomAmount()`

**用途 / Purpose:** 为 「ransom amount」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PlayerCaptivity 实例
PlayerCaptivity playerCaptivity = ...;
playerCaptivity.SetRansomAmount();
```

### EndCaptivity
`public static void EndCaptivity()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
PlayerCaptivity.EndCaptivity();
```

## 使用示例

```csharp
PlayerCaptivity.StartCaptivity(captorParty);
```

## 参见

- [本区域目录](../)