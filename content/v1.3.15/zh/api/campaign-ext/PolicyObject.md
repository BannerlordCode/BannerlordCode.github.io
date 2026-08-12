---
title: "PolicyObject"
description: "王国政策对象：代表一条可被王国通过议会决议采纳或废除的治国政策（如战争税、土地授予），由 policies.xml 注册、DefaultPolicies 提供具名实例，自身只携带只读元数据。"
---
# PolicyObject

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class PolicyObject : PropertyObject`  
**Base:** `PropertyObject`（继承自 `MBObjectBase`，定义在 `TaleWorlds.Core`）  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/PolicyObject.cs`

## 一句话职责

`PolicyObject` 是战役世界里**一条具体的王国政策**（例如「战争税」「土地授予」）：它只携带政策的只读元数据——名称、描述、三派系权重（威权 / 寡头 / 平等）与日志文案——本身不参与任何计算；是否生效、对哪些结算产生影响，由持有它的 `Kingdom` 与对应的 `CampaignBehavior` / `Model` 决定。

## 心智模型

把 `PolicyObject` 当作**「政策卡片」**，而不是会自己做事的服务：

- 它是 `PropertyObject`（→ `MBObjectBase`）派生的一个**纯数据对象**，由 `MBObjectManager` 在战役加载时从 `policies.xml` 注册，由 `DefaultPolicies` 调用 `Initialize(...)` 填充文本与权重。
- 不要为了拿一条内置政策去 `new PolicyObject(...)`。游戏内建政策都在 `DefaultPolicies` 里以 `static` 属性形式暴露，例如 `DefaultPolicies.WarTax`、`DefaultPolicies.LandGrantsForVeteran`；`PolicyObject` 只是它们背后的类型。
- 政策的「生命周期」由 `Kingdom` 掌控：`Kingdom.ActivePolicies` 是当前生效政策的列表。采纳 / 废除**不是你去改列表**，而是发起一个 `KingdomPolicyDecision`（一种 `KingdomDecision`），由议会投票、行为 `KingdomDecisionProposalBehavior` 推进，最终才由 `Kingdom.AddPolicy` / `RemovePolicy` 落地。
- 因为政策是全局部署对象，任何时刻通过 `PolicyObject.All`（等价于 `Campaign.Current.AllPolicies`）都能拿到全部实例；同一 `stringId` 始终是同一实例。

## 如何获取 PolicyObject

```csharp
// 1) 拿到内置具名政策（最常用、最稳健）
PolicyObject warTax = DefaultPolicies.WarTax;

// 2) 遍历全部已注册政策
foreach (PolicyObject policy in PolicyObject.All)
{
    // policy.Name / policy.AuthoritarianWeight ...
}

// 3) 按 stringId 反查（等价于 Game.Current.ObjectManager.GetObject<PolicyObject>("policy_war_tax")）
PolicyObject byId = Game.Current.ObjectManager.GetObject<PolicyObject>("policy_land_grants_for_veteran");
```

注意：`DefaultPolicies.X` 依赖 `Campaign.Current.DefaultPolicies`，只能在战役开始之后访问；`PolicyObject.All` 同样要求 `Campaign.Current` 不为 `null`。

## 何时用 / 何时不要用

**何时用**

- 查询某个王国是否启用了某条政策：用 `kingdom.ActivePolicies.Contains(...)`，或更稳妥的 `kingdom.HasPolicy(DefaultPolicies.WarTax)`。
- 读取政策的只读元数据（名称、三派权重、日志文案）来驱动你自己的 UI 或结算逻辑。
- 枚举全部政策做配置界面或兼容判断（`PolicyObject.All`）。

**何时不要用**

- 不要自行 `new PolicyObject(...)` 之后 `Initialize(...)` 来「新增」游戏内政策——除非你同时维护对应的 `policies.xml`、把 `id` 在 `MBObjectManager` 注册，否则它不会出现在 `PolicyObject.All`，也不会被任何 `Model` 识别。
- 不要直接对 `Kingdom.ActivePolicies` 做 `Add` / `Remove` / `Clear` 去改变王国政策状态。`ActivePolicies` 暴露为 `IList<PolicyObject>`，但绕过决议直接改列表会把议会、影响度成本、日志与关联 Behavior 全部跳过，造成状态不一致；改用 `Kingdom.AddPolicy` / `RemovePolicy`（程序内强制修改），或在正常玩法里通过 `KingdomDecision` 让议会决议。
- 不要假设 `Clan` 上也有政策列表。政策属于 `Kingdom`，`Clan` 在 v1.3.0 / v1.3.15 / v1.4.5 中都没有 `Policies` 属性；对氏族只应查其所属 `Kingdom` 上对应政策的生效情况。
- 不要假设某条政策「一定生效」。读取前先 `kingdom.HasPolicy(...)` 或检查 `ActivePolicies`，因为新建王国会按文化默认政策初始化（`Culture.DefaultPolicyList`），之后随时可能被议会修改。

## 依赖图

- 上游：[MBObjectManager](../../campaign-ext/MBObjectManager/) 在加载期从 `policies.xml` 注册每个 `PolicyObject`；根基类是 [MBObjectBase](../../campaign-ext/MBObjectBase/)，而 [Campaign](../../campaign/Campaign/) 通过 `AllPolicies` 持有全部实例（即 `PolicyObject.All` 的取值来源）。
- 同层注册：[DefaultPolicies](../../campaign-ext/DefaultPolicies/) 在战役启动时调用 `Initialize` 填充文本与权重，并以 `static` 属性暴露具名实例（如 `WarTax`、`LandGrantsForVeteran`）。
- 持有方：[Kingdom](../../campaign/Kingdom/) 用 `ActivePolicies` 记录生效政策，并在议会决议后调用 `AddPolicy` / `RemovePolicy`；决议体是 [KingdomPolicyDecision](../../campaign-ext/KingdomPolicyDecision/)。
- 消费方：各 `CampaignBehavior` 与 `Model`（税收、忠诚度、影响力等结算）读取 `Kingdom.ActivePolicies` 来决定效果，而不是读取 `PolicyObject` 本身。
- 本桶索引：[campaign-ext](../)

## 风险

- **空引用 / 未初始化**：`PolicyObject.All` 在战役初始化完成前或 `Campaign.Current` 为 `null` 时不可用；`DefaultPolicies.X` 同样依赖战役已启动，必须在战役开始之后访问。
- **直接改 `ActivePolicies` 破坏一致性**：`ActivePolicies` 是 `IList<PolicyObject>`，技术上可 `Add` / `Remove`，但应优先 `Kingdom.AddPolicy` / `RemovePolicy`；若自行 `Clear` 或整体替换列表，会让关联 Behavior 与存档快照失配。
- **假设政策已生效**：读取 `ActivePolicies` 不等于「玩家王国一定有某政策」，新建王国的默认政策随文化差异很大。永远先 `HasPolicy` 再分支。
- **新增自定义政策需配套 XML 与注册**：只 `new` + `Initialize` 不够，必须在 `policies.xml` 声明 `id` 并在对象管理器中注册，否则 `All` / `GetObject` 找不到它，各 `Model` 也不会应用其效果。
- **存档还原**：政策对象本身随 `Campaign` 一起序列化。如果你在运行时向 `Kingdom` 强行 `AddPolicy` 一个从未在 XML 中声明的新实例，重载存档时该实例可能无法还原。

## 成员说明

### 注册与枚举

#### `public static MBReadOnlyList<PolicyObject> All { get; }`
返回当前战役中全部已注册的政策实例，实现等价于 `Campaign.Current.AllPolicies`。**用途**：枚举所有政策做配置页或兼容检查。**副作用**：无，只读。**何时调用**：战役已开始后的任意时刻；`Campaign.Current` 为 `null` 时不可用。

#### `public PolicyObject(string stringId) : base(stringId)`
构造一个尚未初始化的政策对象。引擎在 `DefaultPolicies.RegisterAll()` 中通过 `Game.Current.ObjectManager.RegisterPresumedObject(new PolicyObject(stringId))` 创建并注册。**用途 / 何时调用**：仅在你需要新增一条自定义政策并自行负责 XML 与初始化时调用；普通 mod 不要用它拿内置政策。

#### `public void Initialize(TextObject name, TextObject description, TextObject logEntryDescription, TextObject secondaryEffects, float authoritarianWeight, float oligarchyWeight, float egalitarianWeight)`
用文本与三派权重填充实例，并在末尾调用 `AfterInitialized()`。**用途**：政策对象从 `policies.xml` 读出字段后由 `DefaultPolicies.InitializeAll()` 调用，完成本地化与权重设定。**副作用**：写入 `Name` / `Description` / `LogEntryDescription` / `SecondaryEffects` 与三个权重；它不发布任何事件、也不影响任何已生效政策的列表。**何时调用**：由引擎在加载期调用；mod 通常不应手动调用（除非自建政策，且必须在注册之后、被 `Model` 读取之前）。

#### `public override string ToString()`
返回政策的显示名（`Name` 的字符串）。**用途**：调试或日志输出。**副作用**：无。

### 只读元数据（属性）

这些属性在 `Initialize` 之后才有意义，全部为 `{ get; private set; }`，mod 不应直接写入。

| 属性 | 类型 | 说明 |
|------|------|------|
| `Name` | `TextObject` | 政策名称（从 `PropertyObject` 继承，含本地化）。 |
| `Description` | `TextObject` | 政策说明（从 `PropertyObject` 继承）。 |
| `SecondaryEffects` | `TextObject` | 政策次要效果的文案（如「村庄收入 5% 作为税收」）。 |
| `LogEntryDescription` | `TextObject` | 政策被采纳 / 废除时写入日志的短语。 |
| `AuthoritarianWeight` | `float` | 威权派对该政策的倾向权重（-1 ~ 1）。 |
| `OligarchicWeight` | `float` | 寡头派权重。 |
| `EgalitarianWeight` | `float` | 平等派权重。 |

> 三派权重用于议会投票的倾向性模拟（影响 `KingdomElection` 对各 `Clan` 的赞成 / 反对计算），不是政策效果的开关；真正的效果由读取 `Kingdom.ActivePolicies` 的 `Model` / `Behavior` 实现。

## 典型用法示例

### 示例 1：判断玩家王国是否处于战争税之下

```csharp
using TaleWorlds.CampaignSystem;

Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null && playerKingdom.HasPolicy(DefaultPolicies.WarTax))
{
    // 该王国已通过议会采纳「战争税」，可依此调整你的税收 / 繁荣度逻辑
    InformationManager.DisplayMessage(new InformationMessage("王国正处于战争税状态下。"));
}
```

### 示例 2：枚举全部政策，列出玩家王国当前生效的政策名称

```csharp
using TaleWorlds.CampaignSystem;

Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null)
{
    foreach (PolicyObject policy in PolicyObject.All)
    {
        if (playerKingdom.ActivePolicies.Contains(policy))
        {
            // 直接读 PolicyObject 的只读元数据
            string name = policy.Name.ToString();
            float authWeight = policy.AuthoritarianWeight;
            // ...
        }
    }
}
```

### 示例 3（进阶）：以程序方式强制让玩家王国采纳一条政策

```csharp
using TaleWorlds.CampaignSystem;

Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null && !playerKingdom.HasPolicy(DefaultPolicies.RoyalGuard))
{
    // 直接修改王国政策状态；会跳过议会投票与影响度成本，
    // 仅在你确实想绕过决策流程时使用。
    playerKingdom.AddPolicy(DefaultPolicies.RoyalGuard);
}
```

## 跨版本提示

- `PolicyObject` 的公开 API（`All`、`Initialize`、`ToString` 及三个权重 / 文案属性）在 v1.3.0、v1.3.15、v1.4.5 三版中完全一致。
- 政策的具名访问始终通过 `DefaultPolicies`（`DefaultPolicies.WarTax` 等），该类的政策集合在 v1.3.x 与 v1.4.5 完全相同。
- 政策只挂在 `Kingdom` 上；`Clan` 在全部受查版本中均无 `Policies` 属性，请勿跨层假设。

## 导航

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[DefaultPolicies](../../campaign-ext/DefaultPolicies/) · [KingdomPolicyDecision](../../campaign-ext/KingdomPolicyDecision/) · [PolicyDecisionOutcome](../../campaign-ext/PolicyDecisionOutcome/) · [MBObjectBase](../../campaign-ext/MBObjectBase/) · [MBObjectManager](../../campaign-ext/MBObjectManager/)
- 相关类型：[Kingdom](../../campaign/Kingdom/) · [Clan](../../campaign/Clan/) · [Campaign](../../campaign/Campaign/) · [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/)
