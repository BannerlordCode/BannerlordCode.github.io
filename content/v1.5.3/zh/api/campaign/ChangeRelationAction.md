---
title: "ChangeRelationAction"
description: "这个静态 Action 类让你在战役里安全地改变两名英雄之间的个人关系，而不是直接改字段"
---

# ChangeRelationAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class ChangeRelationAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeRelationAction.cs`

## 概述

在《骑马与砍杀2：霸主》的战役层，两名英雄之间的个人关系值（范围 -100 到 100）是外交、联姻、任务与派系政治的核心数据。`ChangeRelationAction` 是官方提供的唯一合法修改入口：它是一个静态类，内部封装了关系变化的完整管线——先经 `DiplomacyModel.GetEffectiveRelationChange` 按当前政策、特性与外交局势修正实际变化量，再用 `MBMath.ClampInt` 把结果夹取到 [-100, 100]，然后写入 `SetPersonalRelation`，最后通过 `CampaignEventDispatcher.Instance.OnHeroRelationChanged` 派发事件。为什么不能直接改字段：关系值的变化必须被 UI（角色面板、关系提示）、任务系统、存档与日志感知；绕过这个类直接写字段，会导致界面不刷新、事件监听方收不到通知、存档状态与显示状态不一致。此外，`ChangeRelationDetail` 枚举会随事件一起派发，监听方据此区分"普通关系变化"与"使者外交带来的变化"。

## 心智模型

Action 模式在 CampaignSystem 里的统一形态是：多个语义化公开入口 → 一个（或一组）private 内部实现。`ChangeRelationAction` 有四个公开入口，但它们只收敛到两个内部实现。增量式入口——`ApplyPlayerRelation`、`ApplyRelationChangeBetweenHeroes`、`ApplyEmissaryRelation`——全部调用 `ApplyInternal`（第 10 行）：后者先向 `DiplomacyModel` 查询修正后的有效变化量，若修正后非零，再解析出实际生效的英雄对（`GetHeroesForEffectiveRelation`，处理"谁与谁生效"的映射），把旧值加上增量、夹取到 [-100, 100] 后写入，最后以原始增量派发事件。覆盖式入口 `SetRelationBetweenHeroes` 则调用 `ApplyInternalBySet`（第 26 行）：它不做修正，直接写入目标值，但派发事件时用的是"新值减旧值"的差值，保证监听方拿到的变化量在两种路径下语义一致。为什么 mod 应该用语义化入口而不是（假如能访问的话）`ApplyInternal`：其一，入口固定了 `ChangeRelationDetail`——`ApplyEmissaryRelation` 硬编码 `Emissary`，其余硬编码 `Default`，事件监听方依赖这个标记区分来源；其二，`ApplyPlayerRelation` 把 `originalHero` 固定为 `Hero.MainHero`，语义清晰且不易传错；其三，`ApplyInternal` 与 `ApplyInternalBySet` 都是 private，mod 根本无法直接调用，这从编译层面保证了所有关系变化都经过事件派发路径，不会出现"改了值但 UI 不更新"的静默 bug。

## 怎么用

### 怎么拿到它

静态类，直接 `ChangeRelationAction.Apply...(…)` 调用，不需要实例，不需要从 `Campaign.Current` 取任何服务。

### 典型用法

1. 玩家完成任务后提升与某位领主的关系 → `ApplyPlayerRelation`
2. 剧情事件强制把关系重置为某个值 → `SetRelationBetweenHeroes`
3. 两名 NPC 英雄之间关系变化（联姻、结仇、共同作战）→ `ApplyRelationChangeBetweenHeroes`
4. 玩家派出的使者改善与目标英雄的关系 → `ApplyEmissaryRelation`

### 最容易踩的坑

1. `ApplyInternal`（第 10 行）与 `ApplyInternalBySet`（第 26 行）都是 private，mod 无法直接调用——必须走公开入口。
2. `ApplyRelationChangeBetweenHeroes` 是**增量**（+5 表示在当前基础上加 5），`SetRelationBetweenHeroes` 是**覆盖**（直接设为 50）——混用会导致关系值不符合预期。
3. `ApplyPlayerRelation` 的 `affectRelatives` 默认 `true`，会同时波及亲属关系；`showQuickNotification` 默认 `true`，会弹关系变化通知。
4. 关系值被 `MBMath.ClampInt` 限制在 -100 到 100，超出部分会被静默截断。
5. 实际变化量经过 `DiplomacyModel` 修正，传入 +10 不一定是最终写入的 +10。

## 关键成员

- **ChangeRelationAction**（`ChangeRelationAction.cs:7`）— 静态类本体，所有关系修改入口的容器；mod 直接调用其静态方法，无需实例化
- **ApplyInternal**（`ChangeRelationAction.cs:10`）— 增量式内部实现：先经 `DiplomacyModel` 修正变化量，再 clamp 到 [-100,100]，写入 `SetPersonalRelation` 并派发 `OnHeroRelationChanged` 事件；private，mod 不可直接调用
- **ApplyInternalBySet**（`ChangeRelationAction.cs:26`）— 覆盖式内部实现：直接写入目标值，按差值（新值 - 旧值）派发事件；private，mod 不可直接调用
- **ApplyPlayerRelation**（`ChangeRelationAction.cs:41`）— 以 `Hero.MainHero` 为 `originalHero` 的增量入口；`affectRelatives` 默认 `true` 会波及亲属
- **ApplyRelationChangeBetweenHeroes**（`ChangeRelationAction.cs:47`）— 任意两名英雄之间的增量修改入口，`detail` 固定为 `Default`
- **ApplyEmissaryRelation**（`ChangeRelationAction.cs:53`）— 使者外交入口，`detail` 固定为 `Emissary`，事件派发时 UI 与日志会区分来源
- **SetRelationBetweenHeroes**（`ChangeRelationAction.cs:59`）— 覆盖式入口：把关系直接设为 `newRelation`，内部走 `ApplyInternalBySet`
- **ChangeRelationDetail**（`ChangeRelationAction.cs:65`）— 枚举：`Default` 或 `Emissary`，标记关系变化的来源，随事件派发供监听方区分

## 真实示例

```csharp
// 场景 1：玩家向一位领主示好，个人关系 +10（增量式，会触发关系变化事件）
Hero target = Hero.MainHero; // 示例占位：实际 mod 中填入目标英雄
ChangeRelationAction.ApplyPlayerRelation(target, 10);

// 场景 2：剧情事件后，把玩家与目标英雄的关系直接重置为 50（覆盖式）
ChangeRelationAction.SetRelationBetweenHeroes(Hero.MainHero, target, 50);

// 场景 3：两名英雄之间关系 +5（例如联姻事件，不经过玩家）
ChangeRelationAction.ApplyRelationChangeBetweenHeroes(Hero.MainHero, target, 5);

// 场景 4：玩家派出的使者改善了与目标英雄的关系（detail = Emissary）
ChangeRelationAction.ApplyEmissaryRelation(Hero.MainHero, target, 5);

// 场景 5：两名英雄之间关系 -20（结仇事件，增量可为负）
ChangeRelationAction.ApplyRelationChangeBetweenHeroes(Hero.MainHero, target, -20);
```

## 参见

- [MakePeaceAction](../MakePeaceAction) —— 本批兄弟页，派系级外交动作
- [Campaign](../Campaign) —— 战役事件与模型入口
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— `OnHeroRelationChanged` 事件的派发方
- [HeroHelper](../../core-extra/HeroHelper) —— 英雄查询工具

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
