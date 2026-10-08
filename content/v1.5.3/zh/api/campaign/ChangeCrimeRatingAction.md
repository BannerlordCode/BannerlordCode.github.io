---
title: "ChangeCrimeRatingAction"
description: "静态 Action 类，让你在战役里安全地调整主角对某阵营的犯罪度：内部会走 CrimeModel 计算有效变化、按需弹提示、触发宣战判定并派发事件。"
---

# ChangeCrimeRatingAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class ChangeCrimeRatingAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeCrimeRatingAction.cs`

## 概述

这个静态 Action 类负责调整主角对某个阵营的犯罪度（`MainHeroCrimeRating`）。它不是简单地给字段加一个数：`ApplyInternal` 先把增量交给 `CrimeModel.GetEffectiveCrimeChange` 算出实际生效值（结果可能被限制在该阵营允许的范围内），再写回字段，然后按条件弹出本地化提示、在生效值越过宣战阈值时降低关系并宣战，最后派发 `OnCrimeRatingChanged` 事件。mod 要走它而不是直接改字段，是因为直接写 `faction.MainHeroCrimeRating` 会绕过有效值计算、提示、宣战判定和事件通知这一整套副作用——这些副作用都是源码里真实存在的步骤。

## 心智模型

入口 → `ApplyInternal` 的收敛结构：

- 唯一公开入口 `Apply`(35) 只是把调用转发给私有 `ApplyInternal`(12)，自身没有额外逻辑。
- `ApplyInternal` 内部按固定顺序做四件事：
  1. 用 `Campaign.Current.Models.CrimeModel.GetEffectiveCrimeChange(faction, deltaCrimeRating).ResultNumber` 算出生效后的犯罪度，再用 `resultNumber - faction.MainHeroCrimeRating` 反推出**实际生效的增量**——注意这会覆盖传入的 `deltaCrimeRating` 局部变量，后面提示和事件用的都是这个实际值，不是请求值。
  2. 若 `showNotification` 为真且实际增量不接近 0（`ApproximatelyEqualsTo(0f, 1E-05f)`），用 `MBInformationManager.AddQuickInformation` 弹一条本地化提示，文本里带变化量、增减方向和新的犯罪度。
  3. 写回 `faction.MainHeroCrimeRating = resultNumber`。
  4. 若生效值达到 `CrimeModel.DeclareWarCrimeRatingThreshold`，且主角是其地图阵营的领袖、双方尚未开战、且该阵营不是主角的地图阵营，则 `ChangeRelationAction.ApplyPlayerRelation(faction.Leader, -10, true, true)` 并 `DeclareWarAction.ApplyByCrimeRatingChange(faction, Hero.MainHero.MapFaction)`。
  5. 最后 `CampaignEventDispatcher.Instance.OnCrimeRatingChanged(faction, deltaCrimeRating)` 派发事件，参数里的 `deltaCrimeRating` 已是实际生效值。

mod 应该用语义化入口 `Apply`，不要试图直接改 `MainHeroCrimeRating` 字段。

## 怎么用

### 怎么拿到它

静态类，直接 `ChangeCrimeRatingAction.Apply(…)` 调用，无需实例化，也不需要从 `Campaign.Current` 取任何服务。

### 典型用法

1. 完成任务后降低与某阵营的犯罪度：`ChangeCrimeRatingAction.Apply(faction, -20f)`。
2. 静默调整（不弹提示）：`ChangeCrimeRatingAction.Apply(faction, -20f, false)`。
3. 把犯罪度清零：先读当前值，再 `Apply(faction, -current, false)`。
4. 事件驱动的 mod 监听 `OnCrimeRatingChanged`，在犯罪度变化后做后续反应。

### 最容易踩的坑

1. `Apply` 的 `showNotification` 默认是 `true`，而 `ApplyInternal` 的对应参数**没有默认值**——直接调 `ApplyInternal` 必须显式传 `bool`。
2. 传入的 `deltaCrimeRating` 是"请求值"，实际生效值由 `CrimeModel` 计算；提示和事件里用的是实际值，可能与请求值不同。
3. 宣战分支只在主角是地图阵营领袖、双方未开战、且目标阵营不是主角地图阵营时触发——非领袖玩家调它不会宣战。
4. 增量接近 0（`1E-05f` 容差）时不会弹提示，但字段仍会被写回。

## 关键成员

- **`ApplyInternal`**（`ChangeCrimeRatingAction.cs:12`）— 私有实现：计算有效犯罪度、按需弹提示、写回字段、触发宣战判定并派发事件。mod 不应直接调用。
- **`Apply`**（`ChangeCrimeRatingAction.cs:35`）— 唯一公开入口，`showNotification` 默认 `true`，直接转发给 `ApplyInternal`。
- **`ChangeCrimeRatingAction`**（`ChangeCrimeRatingAction.cs:9`）— 静态类声明，所有成员都是静态的，无法实例化。

## 真实示例

```csharp
// 把主角对某阵营的犯罪度降为零（例如完成任务后赎罪）
IFaction faction = Hero.MainHero.MapFaction;
float crimeRating = 50f; // 从事件参数或存档里读到的当前犯罪度

// 默认 showNotification = true，会弹出"你的犯罪度已变化"提示
ChangeCrimeRatingAction.Apply(faction, -crimeRating);

// 静默调整：不弹提示，适合批量修正
ChangeCrimeRatingAction.Apply(faction, -crimeRating, false);

// 注意：实际生效值由 CrimeModel 计算，
// 若请求值超出阵营允许范围，提示与事件里用的是实际值
```

## 参见

- [PayForCrimeAction](../PayForCrimeAction) —— 付钱赎罪：扣金币/影响力并降低犯罪度，与本页是"直接改犯罪度"与"花钱消罪"的关系
- [Campaign](../Campaign) —— 战役层 Action 汇总
- [FactionHelper](../../core-extra/FactionHelper) —— 按条件找阵营的辅助工具

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
