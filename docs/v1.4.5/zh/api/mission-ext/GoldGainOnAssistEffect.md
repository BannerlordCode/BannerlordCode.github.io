<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GoldGainOnAssistEffect`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GoldGainOnAssistEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GoldGainOnAssistEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/GoldGainOnAssistEffect.cs`

## 概述

`GoldGainOnAssistEffect` 位于 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGoldOnAssist
`public override int GetGoldOnAssist()`

**用途 / Purpose:** 获取 `gold on assist` 的当前值。

## 使用示例

```csharp
var value = new GoldGainOnAssistEffect();
value.GetGoldOnAssist();
```

## 参见

- [完整类目录](../catalog)