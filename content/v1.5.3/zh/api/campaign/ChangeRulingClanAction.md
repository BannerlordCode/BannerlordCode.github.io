---
title: "ChangeRulingClanAction"
description: "更换王国的统治家族：保存旧值、赋新值并通过 CampaignEventDispatcher 广播 OnRulingClanChanged 事件。mod 应通过 Apply 入口调用。"
---

# ChangeRulingClanAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public class ChangeRulingClanAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeRulingClanAction.cs`

## 概述

ChangeRulingClanAction 负责更换一个王国的统治家族。它做三件事：保存旧统治家族的引用、把 `kingdom.RulingClan` 设为新家族、通过 CampaignEventDispatcher 触发 OnRulingClanChanged 事件，把新旧家族一起广播给所有监听者。为什么必须走它而不是直接改字段：直接赋 `kingdom.RulingClan = x` 只改了值，不会触发事件，所有监听统治家族变化的系统（UI 刷新、AI 决策、任务条件、政策结算）都不会收到通知，世界状态与显示状态会脱节。这个 Action 把"改值 + 发事件"收敛成一次操作，mod 只需调一个方法。

## 心智模型

入口是 `Apply(Kingdom kingdom, Clan clan)`，同样不做额外判断，直接转发给私有的 `ApplyInternal(Kingdom kingdom, Clan newRulerClan)`。ApplyInternal 的结构非常线性：先用局部变量保存旧值 `kingdom.RulingClan`，再把 `kingdom.RulingClan` 赋为新家族，最后调 `CampaignEventDispatcher.Instance.OnRulingClanChanged(kingdom, rulingClan)` 把新旧家族一起广播出去。关于类声明：这个类是 `public class` 而不是 `public static class`，但它的两个方法都是 `static`——这意味着它不需要任何实例状态，mod 直接用 `ChangeRulingClanAction.Apply(kingdom, clan)` 调用即可，不需要也不应该 new 一个实例。它不声明为 static class 在功能上没有影响，只是声明风格与同命名空间里的其他 Action 不同。mod 应该用语义化入口 Apply，不要自己赋 `RulingClan` 字段再手动发事件——事件签名、参数顺序和"先存旧值再赋新值"的顺序都是世界状态一致性的组成部分。

## 怎么用

### 怎么拿到它

直接 `ChangeRulingClanAction.Apply(kingdom, clan)` 调用。类本身不是 static，但方法都是 static，不需要实例化。

### 典型用法

1. 叛乱成功后，把王国统治家族换成叛乱方的家族
2. 选举或继承事件后，更换王国的统治者
3. 自定义"拥立"机制——玩家扶自己人上位
4. 剧情事件中的改朝换代

### 最容易踩的坑

1. 直接赋 `kingdom.RulingClan` 不会触发 OnRulingClanChanged 事件——监听者收不到通知
2. ApplyInternal 不检查参数是否为 null——传 null 会抛 NullReferenceException
3. 事件触发时新值已生效——监听者读 `kingdom.RulingClan` 拿到的是新家族，旧家族要从事件参数取
4. 类不是 `static class` 但方法是 `static`——不要试图 new 实例，直接静态调用

## 关键成员

- **ChangeRulingClanAction**（`ChangeRulingClanAction.cs:6`）— 类声明；注意是 `public class` 而非 `public static class`，但方法均为 static，mod 直接静态调用
- **ApplyInternal**（`ChangeRulingClanAction.cs:9`）— 私有实现；保存旧统治家族、赋新值、触发 OnRulingClanChanged 事件；mod 不应直接调用（private）
- **Apply**（`ChangeRulingClanAction.cs:17`）— 公开入口；转发给 ApplyInternal；mod 唯一应该调用的方法

## 真实示例

```csharp
// 场景：叛乱成功后，把王国的统治家族换成主角的家族
Clan newRulerClan = Hero.MainHero.Clan;
Kingdom kingdom = newRulerClan.Kingdom;
if (kingdom == null || newRulerClan == null)
{
    return;
}
ChangeRulingClanAction.Apply(kingdom, newRulerClan);
```

## 参见

- [DisableHeroAction](../DisableHeroAction) —— 本批兄弟页：停用英雄的 Action
- [Campaign](../Campaign) —— Campaign 层入口：事件、行为与状态系统的总览
- [FactionHelper](../../core-extra/FactionHelper) —— 家族与王国操作的辅助方法速查

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
