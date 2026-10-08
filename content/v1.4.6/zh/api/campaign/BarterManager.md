---
title: "BarterManager"
description: "交易（barter）流程的总管：串起开价、估值、可接受性判定与落地执行四个阶段，玩家交易与 AI 交易走两套不同的入口。"
---
# BarterManager

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`
**Type:** `public class BarterManager`
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/BarterManager.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BarterManager` 是战役层交易系统的流程总管，实例挂在 `Campaign.Current.BarterManager` 上，全局通过 `BarterManager.Instance` 取用。它本身**不定义**"什么东西可以被交易"——那是 `Barterable` 各子类（`PeaceBarterable`、`MarriageBarterable`、`JoinKingdomAsClanBarterable`、`SafePassageBarterable` 等）的职责；也**不决定**"值多少"——那是 `Barterable.GetValueForFaction` 与 `BarterModel` 的职责。它管的是把一次交易的四个阶段串起来：**开价 → 估值 → 可接受性判定 → 落地执行**。

一个容易踩的点是：玩家交易和 AI 交易在 `BarterManager` 里是**两条互不相通的代码路径**。玩家走 `StartBarterOffer`（随后由 UI 调 `BeginPlayerBarter` / `ApplyAndFinalizePlayerBarter` / `CancelAndFinalizePlayerBarter`），AI 走 `ExecuteAiBarter` / `ExecuteAIBarter`，AI 那条路上完全没有 UI、没有冷却检查、也没有 `LastBarterIsAccepted` 的反馈。

## 心智模型

把 `BarterManager` 想成**对话与结算之间的一层调度器**，而不是一个"交易对象"：

1. **它不持有当前交易。** 没有 `CurrentBarterData` 之类的字段；`BarterData` 是每次调用时由调用方（对话系统、UI、AI 行为）传进来的参数。谁发起、谁持有。
2. **估值与落地是两段，且顺序敏感。** `GetOfferValue` / `GetOfferValueForFaction` 是只读计算，用来给 UI 显示和给 AI 做判断；`ApplyBarterOffer`（私有，经由 `ApplyAndFinalizePlayerBarter` 或 `ExecuteAIBarter` 间接触发）才真正调用每个 `Barterable.Apply()` 去改世界状态。AI 的"接受与否"只看估值结果，完全不看 `Apply()` 里发生了什么。
3. **两条入口，两套规则。**
   - 玩家：`StartBarterOffer(..., isAIBarter: false)` → `BeginPlayerBarter` → 界面 → `ApplyAndFinalizePlayerBarter` / `CancelAndFinalizePlayerBarter`。
   - AI：`ExecuteAiBarter(...)`（便捷重载接收单个或一组 `Barterable`）→ 内部构造 `BarterData` → `ExecuteAIBarter` → 先 `MakeBalanced` 自动配平 → 双边 `GetOfferValueForFaction` 都 `>= 0` 才 `ApplyBarterOffer`。
4. **冷却只作用于玩家。** `_barteredHeroes` 记录"与这位英雄交易过"的时间点；只有 `ApplyAndFinalizePlayerBarter` 会调 `HandleHeroCooldown` 写入冷却，`StartBarterOffer` 在 `offerer == Hero.MainHero` 且未提供 `InitContext` 时才用 `CanPlayerBarterWithHero` 检查它。
5. **事件钩子分布在两端。** `BarterBegin` 在开价时触发，`Closed` 在界面关闭时触发；此外还有 `CampaignEventDispatcher` 的 `OnBarterablesRequested` / `OnBarterAccepted` / `OnBarterCanceled` 三个全局事件，mod 扩展交易项通常挂在这些事件上。
6. **溢价的副作用被藏在估值里。** `GetOfferValue` 在计算时顺手把正数部分写进私有字段 `_overpayAmount`，之后 `ApplyBarterOffer` 用它调 `ApplyOverpayBonus` 给玩家关系加成。也就是说：**必须先估值再落地**，跳过估值直接落地就拿不到这份关系奖励。

## 怎么用

### 怎么拿到

`BarterManager` 没有公开构造入口，只能从当前战役取。`Instance` 只是 `Campaign.Current.BarterManager` 的转发属性，在战役未加载时访问会空引用。

```csharp
// 在 CampaignBehaviorBase 的回调里（此时战役一定已加载）
BarterManager barter = BarterManager.Instance;

// 上一次玩家交易的结果（AI 交易不会写它）
bool lastAccepted = barter.LastBarterIsAccepted;

// 交易界面开着的时候，等价写法
BarterManager same = Campaign.Current.BarterManager;
```

### 典型用法

**发起一次玩家交易**——只需给出双方与双方的队伍，剩下的交给对话/UI 流程；`defaultBarterables` 用于把"和平""放行"这类默认项预先塞进去：

```csharp
Hero other = Hero.OneToOneConversationHero;
if (other != null && BarterManager.Instance.CanPlayerBarterWithHero(other))
{
    BarterManager.Instance.StartBarterOffer(
        Hero.MainHero,
        other,
        PartyBase.MainParty,
        other.PartyBelongedTo,
        null,   // beneficiaryOfOtherHero
        null,   // BarterContextInitializer，传 null 会走"玩家交易"分支
        0,      // persuasionCostReduction
        false,  // isAIBarter
        null);  // defaultBarterables
}
```

**发起一次 AI 交易**——给两个派系、两位代表英雄和交易项即可，`ExecuteAiBarter` 会自行构造 `BarterData` 并在双边都划算时成交：

```csharp
// 单个交易项
BarterManager.Instance.ExecuteAiBarter(faction1, faction2, hero1, hero2, barterable);

// 一组交易项
BarterManager.Instance.ExecuteAiBarter(faction1, faction2, hero1, hero2, barterableList);
```

**只想估值 / 只想判断，不动世界状态**——这是给 UI 显示和自定义判定用的安全路径：

```csharp
float mine = BarterManager.Instance.GetOfferValue(hero, party, offererParty, offeredBarters);
float theirs = BarterManager.Instance.GetOfferValueForFaction(barterData, otherFaction);
bool ok = BarterManager.Instance.IsOfferAcceptable(barterData, otherHero, otherParty);
```

**挂事件**——`BarterBegin` / `Closed` 是实例上的委托字段，直接用 `+=` 订阅；全局的 `OnBarterablesRequested` 才是给 mod 添加交易项的标准位置：

```csharp
BarterManager.Instance.BarterBegin += OnBarterBegin;   // 参数是 BarterData
BarterManager.Instance.Closed += OnBarterClosed;       // 无参数
```

### 坑

```csharp
// 坑 1：改 Apply 不会让 AI 更愿意接受
// AI 的接受判断在 ExecuteAIBarter 里只依赖 GetOfferValueForFaction(...) >= 0f，
// 它发生在 ApplyBarterOffer 之前。想让 AI 松口，要改的是
// Barterable.GetValueForFaction 或 BarterModel，而不是 Barterable.Apply。

// 坑 2：跳过估值直接落地会丢掉"溢价关系加成"
// ApplyBarterOffer -> ApplyOverpayBonus 读的是 _overpayAmount，
// 而 _overpayAmount 只在 GetOfferValue 里被写入（BarterManager.cs:176）。
// 自己拼一套流程时若没先调 GetOfferValue，加成恒为 0。

// 坑 3：Close() 不等于清理交易
// Close() 只做两件事：把任务模式切回 MissionMode.Conversation，
// 并触发 Closed 事件。它不释放 BarterData、不重置 _barteredHeroes。
// 取消交易请走 CancelAndFinalizePlayerBarter，它内部会替你调 Close()。

// 坑 4：玩家交易有冷却，且冷却中会静默失败
// StartBarterOffer 在 offerer == Hero.MainHero 且 InitContext == null 时
// 检查 CanPlayerBarterWithHero；冷却中会 Debug.FailedAssert 后直接 return，
// 交易界面根本不会打开，LastBarterIsAccepted 保持 false。

// 坑 5：AI 交易没有返回值，失败是静默的
// ExecuteAIBarter 只在双边估值都 >= 0f 时成交；MakeBalanced 配不平就什么都不做。
// 想确认结果只能自己订阅 CampaignEventDispatcher 的 OnBarterAccepted。
```

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Instance` | `public static BarterManager Instance { get; }` | 全局取用点，转发到 `Campaign.Current.BarterManager`；战役未加载时为空。 | `BarterManager.cs:18` |
| `LastBarterIsAccepted` | `public bool LastBarterIsAccepted { get; internal set; }` | 上一次交易是否被接受；`set` 是 internal，外部只读。AI 交易不写它。 | `BarterManager.cs:30` |
| `BeginPlayerBarter` | `public void BeginPlayerBarter(BarterData args)` | 玩家交易进入界面的入口：触发 `BarterBegin` 事件并把任务模式切到 `MissionMode.Barter`。 | `BarterManager.cs:39` |
| `AddBaseBarterables` | `private void AddBaseBarterables(BarterData args, IEnumerable<Barterable> defaultBarterables)` | 把默认交易项（和平、放行之类）标为已提供并加入 `DefaultsBarterGroup`，避免空交易。 | `BarterManager.cs:54` |
| `StartBarterOffer` | `public void StartBarterOffer(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, Hero beneficiaryOfOtherHero = null, BarterManager.BarterContextInitializer InitContext = null, int persuasionCostReduction = 0, bool isAIBarter = false, IEnumerable<Barterable> defaultBarterables = null)` | **玩家交易的统一入口**：构造 `BarterData`、加默认项、广播 `OnBarterablesRequested`，非 AI 时转入 `BeginPlayerBarter`。 | `BarterManager.cs:74` |
| `ExecuteAiBarter` | `public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, Barterable barterable)` | 单交易项的 AI 交易便捷重载，直接转调下面的集合版本。 | `BarterManager.cs:97` |
| `ExecuteAiBarter` | `public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, IEnumerable<Barterable> baseBarterables)` | AI 交易入口：以两派领袖构造 `BarterData`、广播 `OnBarterablesRequested`，再交给 `ExecuteAIBarter`。 | `BarterManager.cs:103` |
| `ExecuteAIBarter` | `public void ExecuteAIBarter(BarterData barterData, IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero)` | **AI 交易的判定与执行核心**：先双边 `MakeBalanced`，再双边估值，都非负才 `ApplyBarterOffer`。 | `BarterManager.cs:117` |
| `MakeBalanced` | `private void MakeBalanced(BarterData args, IFaction faction1, IFaction faction2, Hero faction2Hero, float fulfillRatio)` | 借 `BarterHelper.GetAutoBalanceBarterablesAdd` 自动补足差额，让 AI 交易更可能配平。 | `BarterManager.cs:130` |
| `Close` | `public void Close()` | 结束交易界面：任务模式回 `MissionMode.Conversation` 并触发 `Closed`。不做交易数据清理。 | `BarterManager.cs:146` |
| `IsOfferAcceptable` | `public bool IsOfferAcceptable(BarterData args, Hero hero, PartyBase party)` | 判断某位英雄是否接受当前报价，判据是 `GetOfferValue(...) > -0.01f`（带极小容差）。 | `BarterManager.cs:159` |
| `GetOfferValueForFaction` | `public float GetOfferValueForFaction(BarterData barterData, IFaction faction)` | 按派系把全部交易项的价值累加成总报价；AI 成交判据用的就是它。 | `BarterManager.cs:165` |
| `GetOfferValue` | `public float GetOfferValue(Hero selfHero, PartyBase selfParty, PartyBase offererParty, IEnumerable<Barterable> offeredBarters)` | 以英雄所属家族（或队伍阵营）为视角估值，**并顺手写入 `_overpayAmount`**，供后续关系加成使用。 | `BarterManager.cs:176` |
| `ApplyAndFinalizePlayerBarter` | `public void ApplyAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)` | 玩家接受后的落地：置 `LastBarterIsAccepted = true`、执行交易、给对手写入冷却。 | `BarterManager.cs:199` |
| `CancelAndFinalizePlayerBarter` | `public void CancelAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)` | 玩家拒绝后的收尾，转调 `CancelBarter`。 | `BarterManager.cs:210` |
| `ApplyBarterOffer` | `private void ApplyBarterOffer(Hero offererHero, Hero otherHero, List<Barterable> barters)` | 真正逐个调用 `Barterable.Apply()` 并广播 `OnBarterAccepted`；玩家侧还会补溢价加成、关闭界面、继续对话。 | `BarterManager.cs:216` |
| `CancelBarter` | `private void CancelBarter(Hero offererHero, Hero otherHero, List<Barterable> offeredBarters)` | 关闭界面、弹"交易被拒绝"提示、广播 `OnBarterCanceled`、恢复对话。 | `BarterManager.cs:239` |
| `ApplyOverpayBonus` | `private void ApplyOverpayBonus(Hero otherHero)` | 把 `_overpayAmount` 折算成与对手的关系提升；交战状态下直接跳过。 | `BarterManager.cs:248` |
| `CanPlayerBarterWithHero` | `public bool CanPlayerBarterWithHero(Hero hero)` | 查询与某位英雄的交易冷却是否已过期；mod 在自行开价前应先问它。 | `BarterManager.cs:262` |
| `HandleHeroCooldown` | `private void HandleHeroCooldown(Hero hero)` | 按 `BarterModel.BarterCooldownWithHeroInDays` 写入/刷新该英雄的冷却时间。 | `BarterManager.cs:269` |
| `ClearHeroCooldowns` | `private void ClearHeroCooldowns()` | 遍历清理已过期的冷却记录，避免字典无限增长。 | `BarterManager.cs:281` |
| `InitializeMarriageBarterContext` | `public bool InitializeMarriageBarterContext(Barterable barterable, BarterData args, object obj)` | 婚约交易的上下文初始化回调：校验 `obj` 传的求婚方/被求婚方与 `MarriageBarterable` 是否匹配。 | `BarterManager.cs:293` |
| `InitializeJoinFactionBarterContext` | `public bool InitializeJoinFactionBarterContext(Barterable barterable, BarterData args, object obj)` | 入伙交易的上下文初始化回调：只对 `JoinKingdomAsClanBarterable` 且所有者是当前对话英雄时返回 true。 | `BarterManager.cs:311` |
| `InitializeMakePeaceBarterContext` | `public bool InitializeMakePeaceBarterContext(Barterable barterable, BarterData args, object obj)` | 议和交易的上下文初始化回调：限定 `PeaceBarterable` 且原始所有者是 `args.OtherHero`。 | `BarterManager.cs:317` |
| `InitializeSafePassageBarterContext` | `public bool InitializeSafePassageBarterContext(Barterable barterable, BarterData args, object obj)` | 安全通行交易的上下文初始化回调：比对原始队伍与 `MobileParty.ConversationParty`。 | `BarterManager.cs:323` |
| `Closed` | `public BarterManager.BarterCloseEventDelegate Closed;` | 交易界面关闭事件（无参）。注意它是字段不是事件，订阅方自己负责退订。 | `BarterManager.cs:359` |
| `BarterBegin` | `public BarterManager.BarterBeginEventDelegate BarterBegin;` | 交易开始事件，携带 `BarterData`；这是替换/注入 `BarterContextInitializer` 的时机。 | `BarterManager.cs:362` |
| `BarterContextInitializer` | `public delegate bool BarterContextInitializer(Barterable barterable, BarterData args, object obj = null)` | 交易项上下文初始化委托；`StartBarterOffer` 靠它区分"玩家手动交易"与"脚本驱动的交易"。 | `BarterManager.cs:373` |
| `BarterCloseEventDelegate` | `public delegate void BarterCloseEventDelegate()` | `Closed` 的委托类型，无参数、无返回值。 | `BarterManager.cs:377` |
| `BarterBeginEventDelegate` | `public delegate void BarterBeginEventDelegate(BarterData args)` | `BarterBegin` 的委托类型，参数为本次交易的 `BarterData`。 | `BarterManager.cs:381` |

## 真实示例

**场景一：让对话选项"谈谈条件"真正打开交易界面。** 关键是别自己去构造 `BarterData`，交给 `StartBarterOffer`，并先检查冷却：

```csharp
protected override void OnSessionLaunched(CampaignGameStarter starter)
{
    starter.AddPlayerLine(
        "barter_open", "lord_talk", "barter_start",
        "{=barter_open}我想和你做笔交易。", 
        () => Hero.OneToOneConversationHero != null
              && BarterManager.Instance.CanPlayerBarterWithHero(Hero.OneToOneConversationHero),
        null);
}

private void OnBarterStart()
{
    Hero other = Hero.OneToOneConversationHero;
    BarterManager.Instance.StartBarterOffer(
        Hero.MainHero, other, PartyBase.MainParty, other.PartyBelongedTo,
        null, null, 0, false, null);
}
```

**场景二：AI 之间自动成交一笔（例如任务结算时用钱换停战）。** 这条路没有 UI、没有冷却，成交条件是两个派系各自算下来都不亏：

```csharp
private void SettleAiDeal(IFaction faction1, IFaction faction2, Hero hero1, Hero hero2)
{
    Barterable peace = new PeaceBarterable(hero1, faction2, CampaignTime.Now);
    BarterManager.Instance.ExecuteAiBarter(faction1, faction2, hero1, hero2, peace);
}
```

**场景三：只做估值，给自定义 UI 显示"对方会怎么想"。** 这一段不改变任何状态，可以放心在每帧或每次拖动滑条时调用：

```csharp
private bool WouldTheyAccept(BarterData data, Hero other)
{
    float theirGain = BarterManager.Instance.GetOfferValueForFaction(data, other.Clan);
    float myGain = BarterManager.Instance.GetOfferValue(
        Hero.MainHero, PartyBase.MainParty, data.OffererParty, data.GetOfferedBarterables());
    return theirGain >= 0f && myGain > -0.01f;
}
```

**场景四：监听交易结果做后续逻辑。** 因为 AI 交易是静默的，唯一可靠的"成交通知"是全局事件：

```csharp
CampaignEvents.BarterAccepted.AddNonSerializedListener(this, OnBarterAccepted);

private void OnBarterAccepted(Hero offerer, Hero other, List<Barterable> barters)
{
    // 注意：这里已经在 Apply 之后，世界状态已改变
    InformationManager.DisplayMessage(new InformationMessage($"{other.Name} 接受了交易。"));
}
```

## 参见

- [`../Hero`](../Hero) —— 交易的发起者、对手与受益人都是 `Hero`；`StartBarterOffer` 与冷却表都以它为主键。
- [`../PartyBase`](../PartyBase) —— 玩家交易必须传双方队伍，估值时也会用它兜底取阵营。
- [`../MobileParty`](../MobileParty) —— `MobileParty.ConversationParty` 是安全通行交易上下文判定的依据。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。
- [`../../campaign-ext/MBObjectManager`](../../campaign-ext/MBObjectManager) —— 从对象管理器侧查找交易涉及的英雄与队伍实例。

## 导航

- 同桶：[`../Hero`](../Hero) · [`../MobileParty`](../MobileParty) · [`../Settlement`](../Settlement)
- 父索引：[`../_index`](../_index)
