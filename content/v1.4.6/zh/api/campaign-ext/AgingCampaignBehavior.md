---
title: "AgingCampaignBehavior"
description: "管理英雄年龄增长、生日、成年与老死的核心战役行为。"
---
# AgingCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AgingCampaignBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AgingCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AgingCampaignBehavior` 是战役层负责**英雄生命周期时间推进**的行为。它把「生日 → 成年 → 老年 → 死亡」这条时间线挂在战役时钟上：每当游戏时间跨过生日节点，就给英雄增加年龄；到达成年阈值时把英雄从少年状态切换为可招募/可参战状态；到达老年阈值时施加属性衰减；最终按寿命曲线触发老死。它是 `CampaignBehaviorBase` 的标准子类，通过 `RegisterEvents()` 订阅战役事件、通过 `SyncData(IDataStore)` 持久化每个英雄的年龄与生日数据。

## 心智模型

把 `AgingCampaignBehavior` 想成战役世界的**户籍管理员**：它不参与战斗、不参与外交，只维护一张「英雄年龄表」。战役时钟每推进一天/一小时，它就检查哪些英雄今天过生日，然后做三件事——加年龄、判定是否成年、判定是否进入老年或死亡。

- **时间驱动**：年龄不是实时计算的，而是离散事件（生日）触发的。这意味着 mod 想改年龄节奏，应改生日事件而非重写整个时钟。
- **状态机**：英雄在「少年 → 成年 → 老年 → 死亡」之间单向迁移，每个迁移点都对应一次属性/可用性变更。
- **可持久化**：年龄与生日存进存档，读档后继续推进，不会回退。

对 mod 开发者而言，这是**主要扩展点**之一：想实现「不老种族」「加速成长」「年龄影响属性」等机制，就从这个 Behavior 的事件与数据入手。

## 怎么用

### 怎么拿到

`AgingCampaignBehavior` 由战役系统在 `CampaignBehaviorBase` 的默认行为集合里自动注册，mod 通常**不需要手动实例化**。要访问它，走 `Campaign.Current` 的行为集合：

```csharp
var aging = Campaign.Current.GetBehavior<AgingCampaignBehavior>();
```

若你的 mod 需要挂接年龄事件，推荐在自己的 `CampaignBehaviorBase` 子类里通过 `CampaignEvents` 订阅相关事件，而不是直接改这个类。

### 典型用法

1. **读取英雄年龄**：通过 `Hero` 的年龄相关属性（由本 Behavior 维护）判断是否成年。
2. **订阅成年事件**：在英雄成年的瞬间触发自定义逻辑（例如解锁某技能树）。
3. **覆盖寿命曲线**：通过 mod 配置调整老年阈值与死亡概率。

### 坑

- **不要直接改 `Hero` 的年龄字段**：年龄由本 Behavior 在生日事件里统一推进，直接改会造成存档不一致。
- **事件顺序**：成年事件在生日事件之后触发，依赖成年状态的逻辑要等成年事件。
- **读档后年龄不重算**：年龄是存档数据，读档时通过 `SyncData` 恢复，不会按当前时间重新推算。

## 关键成员

- `RegisterEvents()`（`AgingCampaignBehavior.cs:18`）—— 挂载战役事件订阅，把生日/成年/老年/死亡检查接入战役时钟。
- `SyncData(IDataStore dataStore)`（`AgingCampaignBehavior.cs:32`）—— 把每个英雄的年龄与生日写入/读出存档，保证跨会话一致。

## 真实示例

```csharp
// 在自己的 CampaignBehaviorBase 子类里订阅成年事件
public override void RegisterEvents()
{
    CampaignEvents.OnHeroBorn.AddNonSerializedListener(this, OnHeroBorn);
}

private void OnHeroBorn(Hero hero)
{
    // 英雄出生时初始化年龄相关状态
    // 实际年龄推进由 AgingCampaignBehavior 在生日事件里完成
}
```

## 参见

- [`MBObjectBase`](../MBObjectBase) —— 所有 MB 对象的基类，`Hero` 的年龄字段最终挂在对象系统上。
- [`MBObjectManager`](../MBObjectManager) —— 对象管理器，英雄作为 MB 对象被注册与查找。
- [`MBGUID`](../MBGUID) —— 英雄唯一标识，年龄数据按 GUID 持久化。
- [`ChangeKingdomAction`](../../campaign/ChangeKingdomAction) —— 年龄影响王国成员资格时的相关动作。

## 导航

- 返回 [campaign-ext 桶索引](../_index)
- 上一项：[AiArmyMemberBehavior](../AiArmyMemberBehavior)
- 下一项：[AiEngagePartyBehavior](../AiEngagePartyBehavior)
