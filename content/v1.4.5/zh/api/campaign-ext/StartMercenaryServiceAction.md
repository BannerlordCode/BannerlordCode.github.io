---
title: "StartMercenaryServiceAction"
description: "StartMercenaryServiceAction 是战役层「让一个氏族开始为某个王国担任雇佣兵」的静态入口：内部先做幂等清理，再按「倍率→归属→状态」三步落状态，最后派发事件。"
---
# StartMercenaryServiceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/StartMercenaryServiceAction.cs`

## 概述

`StartMercenaryServiceAction` 是战役层「让一个氏族开始为某个王国担任雇佣兵」的静态入口。它只有一个公开方法 `ApplyByDefault`，内部走一条固定流水线：先做幂等清理，再按「倍率→归属→状态」三步落状态，最后派发事件。

这个类解决的问题是：modder 想让一个氏族成为某王国的雇佣兵时，不需要手动操作 `Clan` 的多个属性，也不需要关心「这个氏族已经是雇佣兵了怎么办」——调用 `ApplyByDefault` 就足够了。

## 心智模型

**把它想成「雇佣兵契约的签订仪式」：先确认没有旧契约，再写下新契约的三要素（给谁卖命、报酬倍率、身份状态），最后广播「契约已签」。**

1. **幂等清理。** 如果这个氏族已经在为别的王国当雇佣兵，先调用 `EndMercenaryServiceAction.EndByLeavingKingdom` 结束旧契约。这保证了「一个氏族同一时间只能有一份雇佣兵契约」的不变量。

2. **三步落状态。** 按固定顺序设置三个属性：
   - `MercenaryAwardMultiplier`：报酬倍率，决定这个氏族完成任务时获得多少报酬。
   - `Kingdom`：归属王国，决定这个氏族现在为谁卖命。
   - `StartMercenaryService()`：把 `IsUnderMercenaryService` 置为 `true`，这是身份状态的最终确认。

   顺序很重要：先设倍率和归属，再改状态。如果反过来，事件监听者可能会看到「状态已改但归属还没设」的中间态。

3. **玩家专属续期日。** 只有玩家氏族才会被设置 `PlayerMercenaryServiceNextRenewalDay`，这是游戏用来提醒玩家「雇佣兵合同快到期了」的计时器。非玩家氏族没有这个提醒。

4. **事件广播。** 最后派发 `OnMercenaryServiceStarted` 事件，让所有监听者（比如 UI、其他 Behavior）知道「有氏族开始当雇佣兵了」。

## 怎么用

### 怎么拿到

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/StartMercenaryServiceAction.cs`（全文 30 行）。

**入口：** `public static class StartMercenaryServiceAction`（`StartMercenaryServiceAction.cs:3`），**唯一公开成员 `public static void ApplyByDefault(Clan clan, Kingdom kingdom, int awardMultiplier)`（`:26`）。**

**私有枚举 `StartMercenaryServiceActionDetails`（`:5`）只有一个值 `ApplyByDefault`（`:7`）——它存在的意义是给事件监听者一个「原因」标签，目前只有一种原因。**

### 典型用法

```csharp
// 在 mod 中让 playerClan 开始为 playerKingdom 当雇佣兵，报酬倍率 100
StartMercenaryServiceAction.ApplyByDefault(playerClan, playerKingdom, 100);
```

**参数说明：**
- `clan`：要变成雇佣兵的氏族。
- `kingdom`：要效力的王国。
- `awardMultiplier`：报酬倍率，直接写入 `clan.MercenaryAwardMultiplier`。

**调用后会发生什么：**
1. 如果 `clan.IsUnderMercenaryService` 为 `true`，先调用 `EndMercenaryServiceAction.EndByLeavingKingdom(clan)` 结束旧契约。
2. 设置 `clan.MercenaryAwardMultiplier = awardMultiplier`。
3. 设置 `clan.Kingdom = kingdom`。
4. 调用 `clan.StartMercenaryService()`，把 `IsUnderMercenaryService` 置为 `true`。
5. 如果是玩家氏族，设置 `PlayerMercenaryServiceNextRenewalDay` 为当前时间 + 30 天。
6. 派发 `OnMercenaryServiceStarted` 事件。

### 坑

- **幂等清理会触发 `OnMercenaryServiceEnded` 事件。** 如果你在监听 `OnMercenaryServiceStarted` 的同时也监听了 `OnMercenaryServiceEnded`，要注意：对一个已经在当雇佣兵的氏族调用 `ApplyByDefault` 会先触发 End 事件再触发 Start 事件。

- **玩家专属续期日只对玩家氏族生效。** `clan == Clan.PlayerClan` 的判断意味着非玩家氏族调用这个方法不会设置续期日。如果你需要为非玩家氏族设置续期日，得自己手动操作。

- **事件在状态落完之后才派发。** 这意味着事件监听者看到的 `clan` 已经是「契约已签」的完整状态，不需要担心中间态。但如果你在事件回调里又调用了 `ApplyByDefault`，要小心递归。

- **`awardMultiplier` 没有范围检查。** 传负数或零不会报错，但可能会导致游戏逻辑异常（比如报酬计算出错）。调用前自己确认参数合理。

## 关键成员

- **`ApplyByDefault(Clan clan, Kingdom kingdom, int awardMultiplier)`**（`StartMercenaryServiceAction.cs:26`）：唯一公开方法，modder 的入口。内部调用 `ApplyStart` 并传入 `StartMercenaryServiceActionDetails.ApplyByDefault`。

- **`ApplyStart(Clan clan, Kingdom kingdom, int awardMultiplier, StartMercenaryServiceActionDetails details)`**（`StartMercenaryServiceAction.cs:10`）：私有核心方法，执行实际的幂等清理、三步落状态和事件派发。`details` 参数目前只用于事件标签。

- **`StartMercenaryServiceActionDetails` 枚举**（`StartMercenaryServiceAction.cs:5`）：只有一个值 `ApplyByDefault`（`:7`）。存在的意义是让事件监听者能区分「为什么开始当雇佣兵」，目前只有一种原因。

## 真实示例

```csharp
// StartMercenaryServiceAction.cs:10-24 的完整 ApplyStart 实现
private static void ApplyStart(Clan clan, Kingdom kingdom, int awardMultiplier, StartMercenaryServiceActionDetails details)
{
    if (clan.IsUnderMercenaryService)
    {
        EndMercenaryServiceAction.EndByLeavingKingdom(clan);
    }
    clan.MercenaryAwardMultiplier = awardMultiplier;
    clan.Kingdom = kingdom;
    clan.StartMercenaryService();
    if (clan == Clan.PlayerClan)
    {
        Campaign.Current.KingdomManager.PlayerMercenaryServiceNextRenewalDay = Campaign.CurrentTime + 30f * (float)CampaignTime.HoursInDay;
    }
    CampaignEventDispatcher.Instance.OnMercenaryServiceStarted(clan, details);
}
```

**上例展示了完整的「签订仪式」流程：** `:12`-`:14` 是幂等清理，`:16`-`:18` 是三步落状态，`:19`-`:21` 是玩家专属续期日，`:23` 是事件广播。

## 参见

- [EndMercenaryServiceAction](../EndMercenaryServiceAction) — 幂等清理的落点，结束旧契约的对称操作
- [Clan](../../campaign/Clan) — 被修改的氏族对象，`IsUnderMercenaryService`、`MercenaryAwardMultiplier`、`Kingdom` 都在这个类上
- [Kingdom](../../campaign/Kingdom) — 氏族要效力的王国对象

## 导航

- [本区域目录](../)
