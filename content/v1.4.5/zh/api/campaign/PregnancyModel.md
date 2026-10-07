---
title: "PregnancyModel"
description: "怀孕系统规则模型：计算英雄每日受孕概率、妊娠天数、双胞胎/死产/女性后代/分娩死亡率等数值，由妊娠行为在每日起拍与分娩判定时调用。"
---

# PregnancyModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`

**模块：** `TaleWorlds.CampaignSystem`

**类型：** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`

**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PregnancyModel.cs`

## 概述

`PregnancyModel` 是一组纯计算规则：把英雄的年龄、配偶、氏族规模以及魅力系 perk 等输入转换成怀孕相关的数值概率。它自身不保存任何世界状态，所有成员都是无副作用的只读求值——真正的妊娠记录（谁怀了谁、预产期）由 `PregnancyCampaignBehavior` 单独持有并在存档中持久化。

## 心智模型

引擎在战役初始化阶段通过 `GameModels` 的 `GetGameModel<PregnancyModel>()` 装配一个具体实例（原版为 `DefaultPregnancyModel`），并挂到 `Campaign.Current.Models.PregnancyModel` 上。它处在 Campaign 层的 Model 子层，与 Behavior 分离：Model 只回答“按这些已知条件该得到什么数”，而 `PregnancyCampaignBehavior` 负责“在每日 tick 与分娩时如何使用这些数”。运行时，任何想改怀孕概率的代码都应继承 `PregnancyModel` 并注册为覆盖实例（其 `BaseModel` 指向被覆盖的原版），而不是去修改别处已有的世界状态。因为模型对象在整个战役生命周期内只创建一次且保持单例，行为层每次都通过 `Campaign.Current.Models.PregnancyModel` 现取现用，而不是把引用缓存下来。

## 何时使用 / 何时不要使用

- **要改怀孕规则**：继承 `PregnancyModel` 并重写成员，再通过模组装配流程注册为覆盖模型。这是官方提供的唯一扩展点，例如调高每日受孕率或缩短孕期。
- **要读取当前概率**：直接调用 `Campaign.Current.Models.PregnancyModel.GetDailyChanceOfPregnancyForHero(hero)` 等成员，无需也不应自己保存副本。
- **不要**：直接把模型实例缓存到字段里跨战役重载使用；直接给模型字段赋值来“制造怀孕”（模型是无状态的，改它毫无效果）；在战役尚未启动（`Campaign.Current` 为 null）时访问 `PregnancyModel`，会抛空引用异常。
- **真正的状态变更请走 Action/Behavior**：让英雄受孕用 `MakePregnantAction.Apply(hero)`，记录分娩与死亡走 `PregnancyCampaignBehavior` 与 `KillCharacterAction`，而非编辑模型。

## 依赖图

上游由引擎装配的只读模型：

- [GameModels](../GameModels) —— 持有 `PregnancyModel` 属性，并在初始化时通过 `GetGameModel<PregnancyModel>()` 解析实例。
- [MarriageModel](../MarriageModel) —— 同一 Model 子层，决定婚姻关系的建立，是怀孕的前提条件来源之一。
- [Hero](../Hero) —— 模型方法的输入；`GetDailyChanceOfPregnancyForHero` 读取 `hero.Age`、`hero.Spouse`、`hero.Clan`、`hero.Children` 等。
- [Clan](../Clan) —— 孕期计算用到 `hero.Clan.Tier` 与 `hero.Clan.AliveLords` 数量。

下游消费方与持久化：

- [PregnancyCampaignBehavior](../PregnancyCampaignBehavior) —— 每日 `DailyTickHero` 调用本模型判断受孕与分娩，妊娠记录本身由其 `_heroPregnancies`（`[SaveableField]` 列表）持久化，模型本身不存档。
- [DefaultPregnancyModel](../DefaultPregnancyModel) —— 原版实现，给出全部概率的具体常量。
- [Pregnancy](../Pregnancy) —— 行为层内部记录（母亲、父亲、预产期），经 `SyncData` 入档。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 所有战役行为的基类，`PregnancyCampaignBehavior` 由其派生。

## 风险

- **跨战役缓存实例**：把 `Campaign.Current.Models.PregnancyModel` 存进静态字段或长期字段，战役重载后会指向新实例，旧引用可能已被销毁或替换为另一覆盖版本，导致逻辑错乱或访问失效对象。
- **直接制造/消除怀孕**：模型成员都是只读求值，给它赋任何值都不会改变世界。`MakePregnantAction.Apply` 才是写入妊娠记录的正确入口；误用模型字段只会让代码“看起来在改”其实什么都不发生。
- **战役启动前访问**：`Campaign.Current` 在战役加载前为 null，此时取 `PregnancyModel` 会直接空引用崩溃。仅在已运行的战役上下文（行为事件、UI 回调）内访问。
- **覆盖模型忘记调用 `Initialize(BaseModel)`**：`MBGameModel<T>` 的 `BaseModel` 需要通过 `Initialize` 注入被覆盖的原版，否则在只部分重写、需要回退调用原版实现的写法里会拿到 null。
- **概率语义混淆**：`GetDailyChanceOfPregnancyForHero` 返回的是“当天”的受孕概率，调用方（行为）会在配偶就近判定通过后用 `MBRandom.RandomFloat <= 该值` 掷骰；把它当成“累计概率”会严重高估怀孕频率。

## 成员说明

### 概率属性（get-only）

| 成员 | 类型 | 含义 / 副作用 / 调用时机 |
|------|------|--------------------------|
| `PregnancyDurationInDays` | `float` | 妊娠持续天数。原版返回 36 天，快速模式（`GameAccelerationMode.Fast`）返回 18 天。无副作用，怀孕开始时由 `ChildConceived` 读取以计算预产期。 |
| `MaternalMortalityProbabilityInLabor` | `float` | 分娩死亡概率，原版 0.015。无副作用，分娩判定时对非主角母亲掷骰，命中则 `KillCharacterAction.ApplyInLabor`。 |
| `StillbirthProbability` | `float` | 死产概率，原版 0.01。分娩时对每个胎儿掷骰。 |
| `DeliveringFemaleOffspringProbability` | `float` | 胎儿为女性的概率，原版 0.51。决定 `HeroCreator.DeliverOffSpring` 的性别参数。 |
| `DeliveringTwinsProbability` | `float` | 双胞胎概率，原版 0.03。决定本次分娩的胎儿数量（1 或 2）。 |

### 计算方法

- `float GetDailyChanceOfPregnancyForHero(Hero hero)` —— 计算某女性在当天受孕的概率。读取 `hero.Age`（18–45 岁之间且已婚才非零）、`hero.Children.Count`、`hero.Clan.Tier`、`hero.Clan.AliveLords.Count`，并用 `Charm.Virile` perk 的 `PrimaryBonus` 通过 `ExplainedNumber` 追加系数。纯计算、无副作用；由 `PregnancyCampaignBehavior.RefreshSpouseVisit` 在配偶就近判定通过后调用。

## 示例

读取某已婚女英雄今天受孕的概率：

```csharp
Hero marriedFemale = Clan.Lords.FirstOrDefault(h => h.IsFemale && h.Spouse != null && h.IsAlive);
if (marriedFemale != null)
{
    float dailyChance = Campaign.Current.Models.PregnancyModel.GetDailyChanceOfPregnancyForHero(marriedFemale);
    // dailyChance 即今天掷骰受孕时使用的概率
}
```

在自定义覆盖模型里缩短孕期并回退读取原版的概率（利用 `MBGameModel<T>.BaseModel`）：

```csharp
public class FasterPregnancyModel : PregnancyModel
{
    public override float PregnancyDurationInDays => 12f;

    public override float GetDailyChanceOfPregnancyForHero(Hero hero)
    {
        return BaseModel.GetDailyChanceOfPregnancyForHero(hero);
    }

    public override float MaternalMortalityProbabilityInLabor => BaseModel.MaternalMortalityProbabilityInLabor;
    public override float StillbirthProbability => BaseModel.StillbirthProbability;
    public override float DeliveringFemaleOffspringProbability => BaseModel.DeliveringFemaleOffspringProbability;
    public override float DeliveringTwinsProbability => BaseModel.DeliveringTwinsProbability;
}
```

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PregnancyModel.cs`（全文 18 行）。
**入口：** `Campaign.Current.Models.PregnancyModel`（由 `GameModels` 在战役建立 / 读档时解析）。

**它不能 `new`，只能通过 `Campaign.Current.Models` 拿。** 类声明是 `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`（`PregnancyModel.cs:5`），**6 个成员全是 `abstract`，零默认实现**。

这是本桶里最小的 Model 之一：五个 `float` 概率/时长属性（`PregnancyModel.cs:7`-`:15`）加一个带英雄入参的查询 `GetDailyChanceOfPregnancyForHero(Hero hero)`（`:17`）。**注意这里没有 out 参数、没有 TextObject、不碰 DiplomacyModel——它纯粹是一张概率表。**

### 典型用法

五个概率之间**不是独立的**：`PregnancyDurationInDays`（`:7`）决定一次怀孕持续多久，`GetDailyChanceOfPregnancyForHero`（`:17`）是**每日**概率，剩下四个（`:9`-`:15`）是分娩时刻才结算的分布。**把日概率当天概率用是典型误用**——要换算成整个孕期概率应该做 `1 - (1 - daily)^days`。

`MaternalMortalityProbabilityInLabor`（`:9`）与 `StillbirthProbability`（`:11`）是**两个独立通道**，不是互斥分支：难产死亡与死胎可以同时不发生，也可以各自独立发生。`DeliveringTwinsProbability`（`:15`）也不是互斥于单胎——**它描述的是「双胞胎」这一结果本身的概率，不是「是否多胎」的判定**。

想知道某个英雄离预产期还有多远，先拿到一个 `CampaignTime` 再和模型比。**注意 `Pregnancy` 是 `internal`，所以 mod 里拿不到它，只能通过 `PregnancyCampaignBehavior` 的事件间接受理**：

```csharp
public class MyPregnancyWatcher : CampaignBehaviorBase
{
    private readonly Dictionary<Hero, CampaignTime> _dueDates = new Dictionary<Hero, CampaignTime>();

    public override void RegisterEvents()
    {
        CampaignEvents.OnChildConceivedEvent.AddNonSerializedListener(this, OnConceived);
    }

    private void OnConceived(Hero mother)
    {
        PregnancyModel model = Campaign.Current.Models.PregnancyModel;
        _dueDates[mother] = CampaignTime.DaysFromNow(model.PregnancyDurationInDays);
        Debug.Print(mother.Name + " due at " + _dueDates[mother] + " durationDays=" + model.PregnancyDurationInDays, 0);
    }
}
```

**注意事件只有一个实参。** `CampaignEvents.OnChildConceivedEvent` 的类型是 `IMbEvent<Hero>`（`CampaignEvents.cs:883`），处理器形参是 `Hero mother`——**没有 father**。官方的 `ChildConceived(Hero mother)`（`PregnancyCampaignBehavior.cs:192`）在体内自己取 `mother.Spouse`（`:194`），并用 `CampaignTime.DaysFromNow(...)` 算预产期（`:194`）。**所以「谁怀的」这个信息在事件层就丢了，只能靠 `mother.Spouse` 事后补，而那个时刻 Spouse 可能已经变了。**

**这也意味着上例的 `_dueDates` 字典必须自己清。** `AddNonSerializedListener`（`MbEvent.cs:100`）只压链表、没有对应的移除 API，而 `HeroKilledEvent`（`PregnancyCampaignBehavior.cs:85`）取消订阅后你的字典不会自动收缩。**在字典里用 `Hero` 作键意味着强引用，被杀英雄永远不会被 GC。** 生产代码请在 `HeroKilledEvent` 上自己 Remove。

**替换它的代价是全量的。** 因为 6 个成员全部 abstract，派生类必须实现全部 6 个才能编译：

```csharp
public class MyPregnancyModel : PregnancyModel
{
    public override float PregnancyDurationInDays => 280f;
    public override float MaternalMortalityProbabilityInLabor => 0.01f;
    public override float StillbirthProbability => 0.02f;
    public override float DeliveringFemaleOffspringProbability => 0.5f;
    public override float DeliveringTwinsProbability => 0.03f;
    public override float GetDailyChanceOfPregnancyForHero(Hero hero) => 0.002f;
}
```

**而 `Pregnancy` 本身是 `internal class Pregnancy`（`PregnancyCampaignBehavior.cs:35`），只有三个 `readonly` 存档字段：`Mother`（`:38`）、`Father`（`:41`）、`DueDate`（`:44`）。** 外部程序集拿不到它——**所以 mod 里既不能 `hero.Pregnancy`，也不能 new 一个，只能监听事件。**

### 最容易踩的坑

**跨战役缓存实例**：把 `Campaign.Current.Models.PregnancyModel` 存进静态字段或长期字段，战役重载后会指向新实例，旧引用可能已被销毁或替换为另一覆盖版本，导致逻辑错乱或访问失效对象。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：
  - [GameModels](../GameModels) —— 模型装配与访问入口
  - [PregnancyCampaignBehavior](../PregnancyCampaignBehavior) —— 调用方与妊娠记录持有者
  - [DefaultPregnancyModel](../DefaultPregnancyModel) —— 原版实现
  - [MarriageModel](../MarriageModel) —— 同层婚姻规则
  - [Hero](../Hero) / [Clan](../Clan) —— 计算输入来源
  - [CampaignBehaviorBase](../CampaignBehaviorBase) —— 行为基类
