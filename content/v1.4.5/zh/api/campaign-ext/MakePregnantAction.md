---
title: "MakePregnantAction"
description: "MakePregnantAction 的自动生成战役动作参考。"
---
# MakePregnantAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/MakePregnantAction.cs`

MakePregnantAction 是一组静态方法，用于在战役中以特定原因触发"MakePregnant"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Hero mother)
```

**用途 / Purpose:** 将当前对象的效果应用到目标。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
MakePregnantAction.Apply(mother);
```

## 概述

`MakePregnantAction` 是「让一个英雄怀孕」的单一入口。它只有两条语句：把 `Hero.IsPregnant` 这个 **public 字段**置 true，然后广播 `OnChildConceived(mother)`。全文 15 行、零参数校验、零状态。

## 心智模型

**它本身不创建任何怀孕记录，只置一个布尔位。** 真正的记录是**事件监听方**建的：`OnChildConceived` → `PregnancyCampaignBehavior` 注册的 `ChildConceived(Hero mother)`（`PregnancyCampaignBehavior.cs:87`）→ `_heroPregnancies.Add(new Pregnancy(mother, mother.Spouse, CampaignTime.DaysFromNow(...PregnancyDurationInDays)))`（`PregnancyCampaignBehavior.cs:194`）。

所以这一行的实际语义是**「通知别人来登记」**，而不是「我已经怀上了」。这个区分决定了两件事：

1. **父亲取的是事件那一刻的 `mother.Spouse`**（`PregnancyCampaignBehavior.cs:194`），**不是你传入的父亲**——本 Action 根本没有父亲参数。
2. **监听方缺席时，`IsPregnant` 会永久卡在 true。** `CheckOffspringsToDeliver`（`PregnancyCampaignBehavior.cs:105`）会做自愈（找不到记录就把它置回 false，`:110`），但**它和建记录的 `ChildConceived` 在同一个 Behavior 里**——两者一起缺席时没有任何东西会复位这个标志。

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MakePregnantAction.cs`（全文 15 行，本批最短）。
**唯一生产调用点：** `PregnancyCampaignBehavior.cs:122`（`RefreshSpouseVisit` 内）。
**其余 3 处是 cheats：** `CampaignCheats.cs:2637` / `:2648` / `:2666`，且都写成 `hero.IsFemale ? hero : hero.Spouse`——**性别判断放在调用方，本 Action 不管。**

`public static class MakePregnantAction`（`MakePregnantAction.cs:3`），唯一成员 `public static void Apply(Hero mother)`（`:11`）一行转调 `ApplyInternal`（`:13`）。**`private static void ApplyInternal`（`:5`）只有两行：`mother.IsPregnant = true;`（`:7`）与 `OnChildConceived(mother)`（`:8`）。**

### 典型用法

**它没有任何守卫——`mother` 为 null 直接在 `:7` NRE。** 而且它**不检查 `IsFemale`**：给一个男性英雄调它，`IsPregnant` 照样变 true，`PregnancyCampaignBehavior` 的 `DailyTickHero` 门槛（`PregnancyCampaignBehavior.cs:92` 要求 `hero.IsFemale`）就不会处理它，**标志永远不会被复位**。

**所以调用前的两个检查都得你自己做**，而且要跟官方 cheats 的写法对齐：

```csharp
public static void TryMakePregnant(Hero candidate)
{
    if (candidate == null)
    {
        Debug.Print("null hero -> MakePregnantAction.cs:7 would NRE", 0);
        return;
    }
    Hero mother = candidate.IsFemale ? candidate : candidate.Spouse;
    if (mother == null)
    {
        Debug.Print("no female: candidate not female and Spouse is null", 0);
        return;
    }
    if (mother.IsPregnant)
    {
        Debug.Print(mother.Name + " already pregnant, refusing", 0);
        return;
    }
    MakePregnantAction.Apply(mother);
    Debug.Print(mother.Name + " IsPregnant=" + mother.IsPregnant
        + " (record is created by the listener, not by this Action)", 0);
}
```

**上例第二段的 `IsFemale ? candidate : candidate.Spouse` 是照抄 `CampaignCheats.cs:2637` 的官方形状**——**它可以选出 null**（男性英雄无配偶时），所以第三段的判空不是多余的。

**上例最后一行那句括号注释值得留着**：`mother.IsPregnant` 变 true **不代表怀孕记录已建立**。真正的确认是查 `PregnancyCampaignBehavior` 那个私有列表——**而那是 internal，外部读不到**。**所以外部唯一能观察到的只有「什么时候分娩」这一个间接信号。**

**重入也没有保护**：连调两次不会报错，只是第二次的事件会让 `PregnancyCampaignBehavior` 往 `_heroPregnancies` 里塞第二条记录，而 `CheckOffspringsToDeliver` 的 `Find`（`PregnancyCampaignBehavior.cs:107`）只取第一条，**第二条会永久残留直到该英雄死亡时被 `OnHeroKilled` 清掉**（`PregnancyCampaignBehavior.cs:201`）。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| `Hero.IsPregnant`（`Hero.cs:163`，**public 字段非属性**） | `:7` 写入的唯一状态 |
| `CampaignEvents.OnChildConceivedEvent`（`CampaignEvents.cs:883`，`IMbEvent<Hero>`） | `:8` 广播；**只有 Hero 一个实参，没有父亲** |
| `PregnancyCampaignBehavior.ChildConceived`（`PregnancyCampaignBehavior.cs:192`） | 真正的记录创建方 |

## 风险

- **本类零守卫。** `ApplyInternal`（`:5`-`:9`）不判 `mother == null`、不判 `IsFemale`、不判是否已怀孕。**传 null 在 `:7` NRE；给男性英雄调会置出一个永远不会被 `PregnancyCampaignBehavior.cs:92` 那道 `hero.IsFemale` 门槛处理、因而永不复位的假标志。** 这三道检查必须由调用方补齐——官方自己的 cheats 也只补了性别那一道。

- **`IsPregnant` 与真实记录会失步。** 标志在 `MakePregnantAction.cs:7` 被写入，记录在 `PregnancyCampaignBehavior.cs:194` 被创建，**两者分处两个类**。监听方缺席时只有标志没有记录；而 `CheckOffspringsToDeliver`（`PregnancyCampaignBehavior.cs:105`）的自愈也依赖同一个 Behavior。**结果是一个永久为 true、却永远不分娩的标志。**

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)