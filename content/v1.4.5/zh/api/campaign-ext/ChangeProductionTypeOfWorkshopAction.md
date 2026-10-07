---
title: "ChangeProductionTypeOfWorkshopAction"
description: "ChangeProductionTypeOfWorkshopAction 的自动生成战役动作参考。"
---
# ChangeProductionTypeOfWorkshopAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeProductionTypeOfWorkshopAction.cs`

ChangeProductionTypeOfWorkshopAction 是一组静态方法，用于在战役中以特定原因触发"ChangeProductionTypeOfWorkshop"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Workshop workshop, WorkshopType newWorkshopType, bool ignoreCost = false)
```

**用途 / Purpose:** 将当前对象的效果应用到目标。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeProductionTypeOfWorkshopAction.Apply(workshop, newWorkshopType, false);
```

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeProductionTypeOfWorkshopAction.cs`（全文 17 行，本批最短）。
**调用点（仅两处）：** `TaleWorlds.CampaignSystem.CampaignBehaviors/WorkshopsCharactersCampaignBehavior.cs:454`（两参数实参，第三个吃默认）与 `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance/ClanFinanceWorkshopItemVM.cs:637`（同样两参数）。

`public static class ChangeProductionTypeOfWorkshopAction`（`ChangeProductionTypeOfWorkshopAction.cs:5`），**唯一成员 `public static void Apply(Workshop workshop, WorkshopType newWorkshopType, bool ignoreCost = false)`（`:7`）——全文 17 行、零常量零字段。**

### 典型用法

**四行代码里有两个独立的顺序陷阱，而正确顺序是写死的：**

```
int num = (!ignoreCost) ? Models.WorkshopModel.GetConvertProductionCost(newWorkshopType) : 0;  // :9
workshop.ChangeWorkshopProduction(newWorkshopType);                                              // :10
if (num > 0) { GiveGoldAction.ApplyBetweenCharacters(workshop.Owner, null, num); }                // :11-:14
CampaignEventDispatcher.Instance.OnWorkshopTypeChanged(workshop);                                // :15
```

1. **先取价、再改、再收钱**（`:9` → `:10` → `:13`）。**如果你把收钱放到 `ChangeWorkshopProduction` 之后，`GetConvertProductionCost` 拿到的仍是新类型的价格**——这一点其实是对的；真正的问题在下一条。
2. **`ChangeWorkshopProduction` 会清空生产进度**（`Workshop.cs:147`）：`WorkshopType = newWorkshopType`（`Workshop.cs:149`）之后 `_productionProgress = new float[newWorkshopType.Productions.Count]`（`Workshop.cs:150`）。**切换类型 = 当前批次清零，这是隐式的，函数签名上看不出来。**

**而 `OnWorkshopTypeChanged(workshop)`（`:15`）在最后一行**——**所有监听者收到的都是「已改完、已收钱」的状态。** 所以监听方不能依赖事件回查旧类型。

`ignoreCost` 的作用只有一个：把 `num` 强制成 `0`（`:9`），从而跳过整个 `if (num > 0)` 分支。**它不影响生产类型本身，只影响是否扣钱。**

```csharp
public static void ConvertWorkshop(Workshop workshop, WorkshopType target, bool free)
{
    int quoted = Campaign.Current.Models.WorkshopModel.GetConvertProductionCost(target);
    Debug.Print("quote=" + quoted + " free=" + free, 0);
    ChangeProductionTypeOfWorkshopAction.Apply(workshop, target, free);
    Debug.Print("now producing " + workshop.WorkshopType.StringId
        + " slots=" + target.Productions.Count, 0);
    Debug.Print("owner pays " + (free ? 0 : quoted) + "; OnWorkshopTypeChanged already fired", 0);
}
```

**上例第三行那个 `slots` 只能读 `target.Productions.Count`、读不到工坊自己的进度**——因为 `_productionProgress` 是 `private float[]`（`Workshop.cs:23`），**外部程序集拿不到它，也没有公开的进度查询成员。** **所以「切换是否丢进度」这件事无法在调用前后观测**，只能靠「切换类型会清零」这条源码事实。**这正是它危险的原因。**

**而第二行的 `now producing` 要用 `workshop.WorkshopType.StringId` 读、而不是用你传进去的 `target`**——两者相等时看不出差别，**但如果中途有别的监听者改过类型，读传入值会骗你。**

### 最容易踩的坑

- **`Workshop.cs:150` 的 `_productionProgress = new float[...]` 会清空当前生产批次。** `ChangeWorkshopProduction`（`Workshop.cs:147`）没有任何「保留进度」的分支，而 `ChangeProductionTypeOfWorkshopAction.cs:10` 无条件调它。**在生产中途切换类型会丢掉已积累的进度，且不报错、不退款。**

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)