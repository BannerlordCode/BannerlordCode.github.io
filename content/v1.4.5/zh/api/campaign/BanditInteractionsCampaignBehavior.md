---
title: "BanditInteractionsCampaignBehavior"
description: "强盗遭遇战的对话总控：注册整棵 bandit_start_* 对话树（对峙 / 谈判 / 交易赎命 / 归顺 / 投降 / 战斗），并用 _interactedBandits 字典记住每支强盗队伍与玩家交互到哪一步（None / Friendly / PaidOffParty / Hostile）。"
---

# BanditInteractionsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BanditInteractionsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditInteractionsCampaignBehavior.cs`

## 概述

`BanditInteractionsCampaignBehavior` 是**强盗遭遇战的对话总控**。它注册整棵对话树（672 行里约 65 行是 `AddDialogs` 的注册语句），并维护一个运行期字典记住「这支强盗队伍和玩家谈到哪一步了」：

```csharp
private enum PlayerInteraction
{
    None,
    Friendly,
    PaidOffParty,
    Hostile
}

private Dictionary<MobileParty, PlayerInteraction> _interactedBandits = new Dictionary<MobileParty, PlayerInteraction>();
```

**这个字典是本行为唯一的跨存档状态**，通过 `SyncData` 保存，并靠嵌套的 `BanditInteractionsCampaignBehaviorTypeDefiner`（存档 id **70000**）把 `PlayerInteraction` 枚举注册进存档类型 1。

对话树的结构围绕**玩家在强盗遭遇战里的四条出路**展开：

| 出路 | 入口条件 | 对话 id 前缀 | 结局回调 |
| --- | --- | --- | --- |
| 打一架 | 玩家_strength 优势 | `bandit_start_defender` / `bandit_start_fight` | `conversation_bandit_set_hostile_on_consequence` |
| 谈判（安全通行） | 玩家是 `Defender` 侧 | `barter_with_bandit_prebarter` → `_screen` → `_postbarter` | `bandit_barter_successful_on_consequence` 记为 `PaidOffParty` |
| 放他们走 | 玩家实力占优（`_try_leave`）或已谈妥 | `bandit_attacker_try_leave` | — |
| 归顺 / 收编 | 强盗愿意加入 | `conversation_bandits_will_join_player_on_condition` | `conversation_bandits_join_player_party_on_consequence` |
| 接受投降 | 玩家实力压倒性 | `common_bandit_surrender_answer` | `conversation_bandits_surrender_on_consequence` |

## 心智模型

把它当成**「强盗遭遇战的分支状态机」**就对了。

- **行为本身几乎无逻辑，全是对话注册。** `RegisterEvents()` 只订阅两条（`MobilePartyDestroyed` + `OnSessionLaunchedEvent`），`SyncData` 只同步一个字典。**真正的逻辑在那些 `bandit_*_condition` / `*_on_consequence` 私有方法里，而它们只被对话框架回调。**
- **状态机有四个状态，转移规则不对称。** `bandit_neutral_greet_on_consequence`（`:361-367`）**只有当当前状态不是 `PaidOffParty` 时才写 `Friendly`**——付过钱之后不会再退回友好态。而 `conversation_bandit_set_hostile_on_consequence`（`:369-372`）**无条件写 `Hostile`**。**所以「付过钱」优先于「中立问候」，但「敌对」可以覆盖一切。**
- **`bandit_attacker_try_leave_condition` 读的就是这个状态机。** `:660-671`：当玩家_strength **不超过**强盗、或在木筏状态下，且状态**不是** `PaidOffParty` 时，只有状态为 `Friendly` 才返回 true；否则返回 true。**换句话说：付过钱 → 永远可以走；打过招呼 → 玩家不占优时可以走；其它情况 → 不能走。**
- **交易赎命走的是 `BarterManager`。** `bandit_start_barter_consequence`（`:606-613`）调 `BarterManager.Instance.StartBarterOffer(Hero.MainHero, Hero.OneToOneConversationHero, PartyBase.MainParty, MobileParty.ConversationParty?.Party, null, BarterManager.Instance.InitializeSafePassageBarterContext, 0, isAIBarter: false, new Barterable[1] { new SafePassageBarterable(null, Hero.MainHero, MobileParty.ConversationParty?.Party, PartyBase.MainParty) })`。**用的是 `SafePassageBarterable` 而不是自定义类**——所以强盗谈判本质上是「买一张安全通行状」。
- **「收编」与「投降」共用同一个队伍分配界面。** `OpenRosterScreenAfterBanditEncounter(MobileParty, bool doBanditsJoinPlayerSide)`（`:420-462`）是本行为最长的方法。**`doBanditsJoinPlayerSide == false` 时它根本不打开界面**，而是直接：`PlayerEncounter.StartBattle()`（若未开战）→ `SetOverrideWinner(PlayerSide)` → `EnemySurrender = true`。**`true` 时才走 `PartyScreenHelper.OpenScreenWithCondition` + 战船战利品界面 + 逐个 `DestroyPartyAction.Apply`。**
- **收编路径有三段收尾，顺序固定。** `OpenRosterScreenAfterBanditEncounter` 打开队伍界面 → 若强盗有船则 `PortStateHelper.OpenAsLoot(mBList)` → **倒序**遍历 NPC 队伍列表，逐个 `OnBanditPartyRecruited` + `DestroyPartyAction.Apply`。倒序是必要的，因为 `DestroyPartyAction` 会修改被遍历的集合。
- **`GetMemberAndPrisonerRostersFromParties` 用 `ref` 出参。** `:374-419` 接受 `ref TroopRoster troopsTakenAsMember` / `ref TroopRoster troopsTakenAsPrisoner`，由调用方预先 `TroopRoster.CreateDummyTroopRoster()` 建好空表。
- **归顺与投降的触发被推迟到对话结束。** 注册代码里有两处 `Campaign.Current.ConversationManager.ConversationEndOneShot += delegate { ... conversation_bandits_surrender_on_consequence(party); }`——**把 `MobileParty.ConversationParty` 先捕获到局部变量再注册**，因为对话结束时那个静态属性可能已经变了。

### 对话树的形状

```text
start
 ├─ bandit_start_defender            条件: bandit_start_defender_condition（对方是强盗）
 │   ├─ bandit_start_defender_1      玩家选项「打一架」   条件: 玩家_strength 不足
 │   ├─ bandit_start_defender_3      玩家选项「我们打不了」 条件: 上者取反
 │   └─ bandit_start_defender_2      玩家选项「也许可以谈」  条件: bandit_start_barter_condition
 │        └─ barter_with_bandit_prebarter → barter_with_bandit_screen（开 barter 界面）
 │              └─ barter_with_bandit_postbarter
 │                   ├─ _1  条件: bandit_barter_successful_condition → PaidOffParty
 │                   └─ _2  条件: 取反 → Hostile
 └─ bandit_attacker                  条件: bandit_neutral_greet_on_condition
     ├─ common_encounter_ultimatum → common_encounter_ultimatum_answer
     │    ├─ common_encounter_ultimatum_surrender  条件: conversation_bandits_surrender_on_condition
     │    │    └─ common_bandit_surrender_answer
     │    │         ├─ common_bandit_surrender_accepted   → 延后到 ConversationEndOneShot 收编
     │    │         ├─ common_bandit_surrender_join_offer → 延后到 ConversationEndOneShot 收编
     │    │         └─ common_bandit_surrender_declined   → Hostile
     │    └─ common_encounter_ultimatum_war               → Hostile
     ├─ common_encounter_fight      玩家选项「你可以走了」→ bandit_attacker_leave
     └─ bandit_attacker_leave       条件: bandit_attacker_try_leave_condition
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BanditInteractionsCampaignBehavior()` | `public BanditInteractionsCampaignBehavior()` | **显式调用基类构造并传入一个 id 字符串**：`: base("BanditsCampaignBehavior")`（`:53-56`）。`CampaignBehaviorBase` 有两个构造器（`CampaignBehaviorBase(string stringId)` 与无参版，定义在 `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs:7` 与 `:12`），这个参数是行为的字符串 id。**注意源码用的是复数 `Bandits`，与类名 `BanditInteractions...` 不一致。** |
| `RegisterEvents()` | `public override void RegisterEvents()` | 只订阅两条（`:63-67`）：`CampaignEvents.MobilePartyDestroyed → OnPartyDestroyed` 与 `CampaignEvents.OnSessionLaunchedEvent → OnSessionLaunched`。**没有 tick、没有对话事件订阅**——对话树在 `OnSessionLaunched` 里一次性注册。 |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | 只同步一个字段：`dataStore.SyncData("_interactedBandits", ref _interactedBandits);`（`:69-72`）。**键是 `MobileParty` 实例**，所以存档系统要能把队伍对象重新绑定上——这是它能存档的前提。 |
| `OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | 对话注册入口（`:58-61`）：一行 `AddDialogs(campaignGameStarter);`。**`AddDialogs` 是 `protected`（不是 `private`），所以派生类可以扩写对话树。** |
| `OnPartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)` | `private void OnPartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)` | 字典清理（`:74-80`）：`if (_interactedBandits.ContainsKey(mobileParty)) _interactedBandits.Remove(mobileParty);`。**`destroyerParty` 参数未用。** **这是防止字典无限增长的唯一机制**——队伍被销毁但事件没触发就会泄漏。 |
| `SetPlayerInteraction(MobileParty mobileParty, PlayerInteraction interaction)` | `private void SetPlayerInteraction(MobileParty mobileParty, PlayerInteraction interaction)` | 状态写入（`:82-93`）。**先判 `ContainsKey` 再决定赋值还是 `Add`**——等价于 `dict[key] = value`，但写法更啰嗦。**所有状态转移都走它**，没有旁路。 |
| `GetPlayerInteraction(MobileParty mobileParty)` | `private PlayerInteraction GetPlayerInteraction(MobileParty mobileParty)` | 状态读取（`:95-104`）：`TryGetValue` 成功就返回，**失败返回 `PlayerInteraction.None`**。所以「没打过交道的强盗」与「明确中立」是两回事。 |
| `bandit_barter_successful_on_consequence()` | `private void bandit_barter_successful_on_consequence()` | 交易成功 → 写 `PaidOffParty`（`:356-359`）。**这是唯一写 `PaidOffParty` 的地方**。 |
| `bandit_neutral_greet_on_consequence()` | `private void bandit_neutral_greet_on_consequence()` | 中立问候 → **有条件**地写 `Friendly`（`:361-367`）：`if (GetPlayerInteraction(...) != PlayerInteraction.PaidOffParty)`。**付过钱的状态不会被降级。** |
| `conversation_bandit_set_hostile_on_consequence()` | `private void conversation_bandit_set_hostile_on_consequence()` | 敌对 → **无条件**写 `Hostile`（`:369-372`）。**可以覆盖 `PaidOffParty`。** |
| `bandit_attacker_try_leave_condition()` | `private bool bandit_attacker_try_leave_condition()` | 「放他们走」的判定（`:660-671`）。读 [PlayerEncounter](../PlayerEncounter) 的 `EncounteredParty.CalculateCurrentStrength()` 与 `PartyBase.MainParty.CalculateCurrentStrength()`，加上 `MobileParty.MainParty.IsInRaftState` 和状态机。**它是整个状态机唯一的消费者**——写入的状态只在这里被读。 |
| `OpenRosterScreenAfterBanditEncounter(MobileParty conversationParty, bool doBanditsJoinPlayerSide)` | `private void OpenRosterScreenAfterBanditEncounter(MobileParty conversationParty, bool doBanditsJoinPlayerSide)` | **两条结局路径的分水岭**（`:420-462`）。`false` 分支（投降）不开界面，直接 `StartBattle()`（若未开战）→ `SetOverrideWinner(PlayerSide)` → `EnemySurrender = true`。`true` 分支（收编）走 `FindAllNpcPartiesWhoWillJoinEvent` → `GetMemberAndPrisonerRostersFromParties` → `PartyScreenHelper.OpenScreenWithCondition` → `PortStateHelper.OpenAsLoot`（有船时）→ **倒序** `OnBanditPartyRecruited` + `DestroyPartyAction.Apply`。 |
| `bandit_start_barter_consequence()` | `private void bandit_start_barter_consequence()` | 打开赎命交易（`:606-613`）。调 `BarterManager.Instance.StartBarterOffer(...)` 并传入 `BarterManager.Instance.InitializeSafePassageBarterContext` 与一个 `SafePassageBarterable(null, Hero.MainHero, MobileParty.ConversationParty?.Party, PartyBase.MainParty)`。**用的全是 `?.` 与 `??`，因为 `MobileParty.ConversationParty` 在某些对话时机为 null。** |
| `BanditInteractionsCampaignBehaviorTypeDefiner` | `public class BanditInteractionsCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 存档类型定义器（`:23-39`），构造器写死 `base(70000)`，`DefineEnumTypes()` 里 `AddEnumDefinition(typeof(PlayerInteraction), 1)`。**`PlayerInteraction` 是私有嵌套枚举，但它能进存档全靠这个 definer。** |
| `_goldAmount` | `private static int _goldAmount;` | **一个只被写、从不被读的静态字段**（`:51`）。死代码，但它是 `static` 而非实例字段——**多存档并行时它会跨战役残留。** |

## 怎么用

这是山贼的对话接入点：它自己不含任何玩法逻辑，全部代码就是往对话系统里注入一批与山贼相关的对话 XML，并给这些对话补上一份枚举类型的存档定义。

**怎么拿到它**：注册点是 `SandBoxManager.cs:37` 的 `gameStarter.AddBehavior(new BanditInteractionsCampaignBehavior())`，声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditInteractionsCampaignBehavior.cs`。它有三个关键成员：`AddDialogs` 在同文件 `:103`，是真正的内容注入点；`OnSessionLaunched` 在 `:58`，负责在会话启动时拿到 `CampaignGameStarter`；`RegisterEvents` 在 `:63`，`SyncData` 在 `:69`。

它和同层的 `BanditSpawnCampaignBehavior` 分工非常干净：后者负责地图上生成藏身处和山贼部队，这个类只负责让山贼能说话。所以你要改「山贼被玩家搭话时说什么」，改这里；要改「地图上哪里有山贼」，改 [BanditDensityModel](../BanditDensityModel)。

```csharp
BanditInteractionsCampaignBehavior behavior =
    Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>();
Debug.Print("行为已挂载，对话内容由 AddDialogs 在会话启动时注入", 0);
Debug.Print("对话线 id：bandit_start_defender / bandit_start_attacker", 0);
Debug.Print("后果回调 conversation_bandit_set_hostile_on_consequence 会把双方转为敌对", 0);
```

它还有一个嵌套的 `SaveableTypeDefiner`，构造函数在同文件 `:25`，它把对话条目引用到的 `PlayerInteraction` 私有嵌套枚举注册进存档（`DefineEnumTypes` 在 `:30`，`DefineContainerDefinitions` 在 `:35`）。行为自己的 `SyncData`（`:69`）只写一个字段 `_interactedBandits`。

`AddDialogs` 里注册的是两条完整对话线。第一条从 `bandit_start_defender`（`:105`）分出「打一场」「求饶」「谈交易」三个玩家选项（`:106`–`:108`），谈交易那条再分出成交与谈崩两个结局（`:109`–`:111`），谈崩的后果 `conversation_bandit_set_hostile_on_consequence` 直接把双方转为敌对。第二条是招降线，从 `bandit_start_attacker`（`:112`）进入，玩家可以拒绝、离开、接受投降或收编。

值得注意的是副作用不是当场执行的：它们先取 `MobileParty.ConversationParty` 存下部队引用，再挂到 `Campaign.Current.ConversationManager.ConversationEndOneShot` 上，等对话窗口真正关闭后才跑。所以「山贼同意入伙」这类效果在对话结束前是看不到的。

**最常见的坑**：`AddDialogs` 只在 `OnSessionLaunched` 阶段跑一次，也就是模块加载完成、战役尚未开始的窗口期。在战役开始后想补对话再调它是不生效的，因为对话集合在那一阶段已经被消费掉了。

## 真实示例

读一支强盗队伍与玩家的交互状态（复刻 `GetPlayerInteraction` 的语义，**没记录 = None**）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Party;

public static string DescribeBanditRelationship(MobileParty bandit)
{
    if (bandit == null)
    {
        return "no bandit";
    }

    BanditInteractionsCampaignBehavior behavior = Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>();
    if (behavior == null)
    {
        return "behavior not registered";
    }

    Debug.Print("is bandit=" + bandit.IsBandit + " clan=" + bandit.ActualClan.Name.ToString(), 0);
    return "inspect via behaviour, dictionary is private";
}
```

给自己的行为加一条强盗对话线（`AddDialogs` 是 `protected`，所以派生即可覆盖）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

public class MyBanditDialogue : BanditInteractionsCampaignBehavior
{
    protected override void AddDialogs(CampaignGameStarter starter)
    {
        base.AddDialogs(starter);

        starter.AddDialogLine("my_bandit_start", "start", "my_bandit_choice", "{=!}{ROBBERY_THREAT}",
            condition: () => PlayerEncounter.EncounteredParty != null && PlayerEncounter.EncounteredParty.IsMobile,
            consequence: null);
        starter.AddPlayerLine("my_bandit_line_1", "my_bandit_choice", "close_window", "{=myBanditPay}Fine. Take it.",
            condition: () => Hero.MainHero.Gold >= 200,
            consequence: () => GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, 200));
    }
}
```

判断「现在能不能放强盗走」（复刻 `bandit_attacker_try_leave_condition` 的强度比较部分）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static bool PlayerOutmatched(MobileParty encountered)
{
    if (encountered == null)
    {
        return false;
    }

    bool weaker = encountered.CalculateCurrentStrength() > PartyBase.MainParty.CalculateCurrentStrength();
    bool onRaft = MobileParty.MainParty.IsInRaftState;
    return weaker || onRaft;
}
```

检查对话注册是否已经发生（`OnSessionLaunchedEvent` 只在会话启动时派发一次）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

public class MySessionWatcher : CampaignBehaviorBase
{
    public int SessionsSeen { get; private set; }

    public override void RegisterEvents()
    {
        CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, OnSessionLaunched);
    }

    private void OnSessionLaunched(CampaignGameStarter starter)
    {
        this.SessionsSeen++;
        BanditInteractionsCampaignBehavior official = Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>();
        Debug.Print("session " + this.SessionsSeen + ", bandit dialogue behaviour present = " + (official != null), 0);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## 风险与边界

- **派生类无法覆写任何对话方法。** `bandit_*_condition` 与 `*_on_consequence` 全是 `private`，`AddDialogs` 是 `protected`。**扩写对话树的唯一入口是在 `AddDialogs` 覆写里先 `base.AddDialogs(starter)` 再追加自己的行**——这也是为什么 `AddDialogs` 是 protected 而不是 private。
- **`PlayerInteraction` 是私有嵌套枚举。** 外部代码无法引用它，也无法读取 `_interactedBandits`（私有字段）。**想读「某强盗与玩家的关系」，只能复刻那四条 condition 的逻辑，或反射。**
- **`_interactedBandits` 以 `MobileParty` 为键，需要存档系统重新绑定。** 读档后键必须指向新世界里等价的队伍实例。**如果你自己造队伍而不发 `MobilePartyCreated`/`MobilePartyDestroyed`，字典会与实际队伍脱节。**
- **`OnPartyDestroyed` 是唯一的清理路径。** 队伍被销毁但这个事件没派发（例如某些强杀路径），字典条目就永久残留——**同时也是 `MobileParty` 引用的泄漏。**
- **状态转移不对称：付过钱不能退回友好，敌对可以覆盖一切。** 写 `Friendly` 有 `!= PaidOffParty` 守卫，写 `Hostile` 没有守卫。**任何依赖「打过招呼」来解锁对话的 mod，都要考虑玩家后来宣战导致状态变 `Hostile` 的情况。**
- **状态机只有一个消费者。** `bandit_attacker_try_leave_condition` 是唯一读它的地方——**所有其它对话条件读的是实时战斗状态（`PlayerEncounter`、`CalculateCurrentStrength`），不是这个字典。**
- **`OpenRosterScreenAfterBanditEncounter` 的 `false` 分支直接改战斗结果。** `PlayerEncounter.Battle.SetOverrideWinner(PlayerSide)` + `EnemySurrender = true`。**它会跳过战斗开场（若尚未开战）直接强制玩家胜利**，而 `doneClicked` 回调 `OnDoneClicked` 干脆 `return true;` 什么都不做——**投降路径没有任何后续处理**。
- **收编路径倒序遍历 NPC 队伍列表。** `for (int num = list2.Count - 1; num >= 0; num--)`，因为 `DestroyPartyAction.Apply` 会修改集合。**如果你照抄成正序遍历，会漏掉队伍或抛异常。**
- **`GetMemberAndPrisonerRostersFromParties` 的 `ref` 出参必须预先创建。** 官方用 `TroopRoster.CreateDummyTroopRoster()` 建空表再传引用。**传 null 会在方法体内 NRE。**
- **两处 `ConversationEndOneShot` 先捕获 `MobileParty.ConversationParty`。** 对话结束时那个静态属性可能已经变了，所以必须先存进局部变量。**这是这个文件里最容易被抄错的一处。**
- **`bandit_start_barter_consequence` 全程使用 `?.`。** `MobileParty.ConversationParty?.Party` 出现两次——**这个属性在某些对话时机确实为 null**。你的代码照抄时不要去掉 `?.`。
- **`_goldAmount` 是只写不读的静态字段。** 它是 `static` 而不是实例字段，**跨战役残留**。虽然不影响逻辑，但是这个文件里唯一一处静态可变状态。
- **构造器里 `base("BanditsCampaignBehavior")` 的字符串与类名不符。** 类名是 `BanditInteractionsCampaignBehavior`，基类参数是 `BanditsCampaignBehavior`（复数）。**用这个字符串做行为查找的代码要按实际字符串写。**
- **存档 id 70000 与枚举类型号 1 硬编码。** `AddEnumDefinition(typeof(PlayerInteraction), 1)` ——**复制这个 definer 会同时撞存档 id 与枚举号。**

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditInteractionsCampaignBehavior.cs` 是 672 行原始源码。跨版本比对时盯六点：存档 id `70000` 与 `PlayerInteraction` 的枚举类型号 **1**（**枚举顺序变化就会让旧存档里的关系状态全部错位**，这是最危险的一处）、`PlayerInteraction` 四个状态的顺序、交易里用的 `SafePassageBarterable` 与 `InitializeSafePassageBarterContext`（**换成别的 barterable 会改变赎命交易的价格结构**）、`OpenRosterScreenAfterBanditEncounter` 里的 `PartyScreenHelper.OpenScreenWithCondition` 十个参数（**这个 API 极易随版本变动**）、以及 `AddDialogs` 是否仍是 `protected`（改成 private 就没法扩写对话树了）。

## 依赖关系

- 官方注册点：`SandBoxManager.cs:37` 的 `gameStarter.AddBehavior(new BanditInteractionsCampaignBehavior());`，紧随 [BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior) 之后
- 遭遇战上下文：[PlayerEncounter](../PlayerEncounter) 的 `Current` / `EncounteredParty` / `EncounteredMobileParty` / `Battle` / `EnemySurrender` / `LeaveEncounter` 与 `StartBattle()`，以及 `FindAllNpcPartiesWhoWillJoinEvent`——**强度比较与结局分支全部依赖它**
- 队伍侧：[MobileParty](../MobileParty) 的 `ConversationParty` / `Ships` / `ActualClan` / `CalculateCurrentStrength` / `IsInRaftState` / `SetMovePatrolAroundPoint`；队伍销毁走 `DestroyPartyAction.Apply`
- 交易：[BarterManager](../BarterManager) 的 `Instance.StartBarterOffer(...)` 与 `InitializeSafePassageBarterContext`，交易条目是 [BarterData](../BarterData) 体系里的 `SafePassageBarterable`
- 队伍界面：`PartyScreenHelper.OpenScreenWithCondition` 与 [PartyScreenLogic](../PartyScreenLogic)（`TroopType` / `PartyRosterSide` / `TransferState`），战船界面是 `PortStateHelper.OpenAsLoot`
- 花名册：[TroopRoster](../TroopRoster) 的 `CreateDummyTroopRoster` / `GetTroopRoster` / `TotalManCount` 与 `FlattenedTroopRoster`
- 对话框架：[ConversationManager](../ConversationManager) 的 `ConversationEndOneShot`，以及 `CampaignGameStarter` 的 `AddDialogLine` / `AddPlayerLine`
- 英雄状态：`Hero.CharacterStates.Fugitive` / `Active` 的切换（`DoneButtonCondition` 里把归顺的逃犯改回 Active）
- 事件：[CampaignEvents](../CampaignEvents) 的 `MobilePartyDestroyed` 与 `OnSessionLaunchedEvent`；派发方 `CampaignEventDispatcher` 的 `OnBanditPartyRecruited`
- 存档：嵌套的 `BanditInteractionsCampaignBehaviorTypeDefiner`（id **70000**）把私有枚举 `PlayerInteraction` 注册为存档类型 1
- 桶首页：[campaign API 分区](../)
