---
title: "PlayerCaptivity"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerCaptivity`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerCaptivity

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerCaptivity`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/PlayerCaptivity.cs`

## 概述

`PlayerCaptivity` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaptorParty` | `public static PartyBase CaptorParty { get; set; }` |
| `RandomNumber` | `public static float RandomNumber { get; set; }` |
| `IsCaptive` | `public static bool IsCaptive { get; }` |
| `CaptiveTimeInDays` | `public static int CaptiveTimeInDays { get; }` |
| `CaptivityStartTime` | `public static CampaignTime CaptivityStartTime { get; }` |
| `LastCheckTime` | `public static CampaignTime LastCheckTime { get; set; }` |

## 主要方法

### StartCaptivity
`public static void StartCaptivity(PartyBase captorParty)`

**用途 / Purpose:** 处理 `start captivity` 相关逻辑。

### OnPlayerCharacterChanged
`public static void OnPlayerCharacterChanged()`

**用途 / Purpose:** 当 `player character changed` 事件触发时调用此方法。

### SetRansomAmount
`public void SetRansomAmount()`

**用途 / Purpose:** 设置 `ransom amount` 的值或状态。

### EndCaptivity
`public static void EndCaptivity()`

**用途 / Purpose:** 处理 `end captivity` 相关逻辑。

## 使用示例

```csharp
PlayerCaptivity.StartCaptivity(captorParty);
```

## 参见

- [完整类目录](../catalog)