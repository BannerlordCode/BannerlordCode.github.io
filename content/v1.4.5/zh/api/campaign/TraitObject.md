---
title: "TraitObject"
description: "战役角色成长层里“特性（Trait）”的数据定义：每个 TraitObject 代表一种性格/能力取向（如 Valor、Honor、Calculating），并约束其取值上下界与是否对玩家隐藏。它本身是只读定义，真正“某角色拥有几级某特性”的状态由 Hero / CharacterObject 上的 PropertyOwner<TraitObject> 持有。"
---
# TraitObject

**命名空间：** TaleWorlds.CampaignSystem.CharacterDevelopment
**模块：** TaleWorlds.CampaignSystem
**类型：** `public sealed class TraitObject : PropertyObject`
**基类：** `PropertyObject`
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/TraitObject.cs`

## 概述

`TraitObject` 是 Bannerlord 战役角色成长系统里**“一种特性（Trait）的静态定义”**：它不表示某个具体角色拥有多少该特性，而是描述这种特性本身长什么样——它有名字、描述、一个允许的取值下限 `MinValue` 与上限 `MaxValue`，以及一个 `IsHidden` 标记来决定它是否对玩家可见（例如 `Commander`、`Surgery`、`Thug` 这类内部特性被隐藏，而 `Valor`、`Honor`、`Mercy` 对玩家可见）。游戏内全部特性由 `DefaultTraits`（位于同一命名空间）在构造时通过 `Game.Current.ObjectManager.RegisterPresumedObject` 注册，并由 `Initialize` 写入具体数值范围与本地化文本。真正“某英雄/某兵种模板在某特性上的等级”并不存在 `TraitObject` 上，而是分别存在 `Hero._heroTraits` 与 `CharacterObject._characterTraits` 这两个 `PropertyOwner<TraitObject>` 里，通过 `GetTraitLevel` / `SetTraitLevel` 读写。理解这一点是避免在 mod 里“直接改 TraitObject 来给角色加特性”这一典型误用的关键。

## 心智模型

把 `TraitObject` 想成**“特性的身份证模板”，而不是角色身上那格会变动的数值**：

- 它是 `PropertyObject` 的子类（不是 `MBObjectBase`），由 `DefaultTraits` 在战役初始化时 `new TraitObject(stringId)` 后经 `Game.Current.ObjectManager.RegisterPresumedObject` 登记进对象管理器，再由 `Initialize(name, description, isHidden, minValue, maxValue)` 填好文本与取值范围。你几乎永远**不要自己 `new TraitObject(...)`** 造一个——它必须走注册流程才能被 `TraitObject.All` / `DefaultTraits.Xxx` 索引到。
- **定义与状态分离**：`TraitObject` 自身是只读的“标尺”（只告诉你某特性最低/最高多少、叫什么），角色实际等级是另一份数据。想读“玩家英雄有多英勇”，应调用 `Hero.MainHero.GetTraitLevel(DefaultTraits.Valor)`，返回的是 `Hero._heroTraits` 里存的整数；想改则调 `Hero.SetTraitLevel(DefaultTraits.Valor, level)`，它会用 `MBMath.ClampInt` 把值夹在 `MinValue..MaxValue` 之间再写入。
- **何时用**：读取/枚举所有特性（`TraitObject.All`）、按 `DefaultTraits.Valor` 等静态引用查询或调整某角色的特性等级、在对话/任务里根据 `GetTraitLevel` 决定语气或奖励。
- **何时不用 / 危险**：不要把 `TraitObject` 当成可变状态去改它的 `MinValue`/`MaxValue`/`IsHidden`（它们是 `private set`，且改了会影响所有角色）；也不要指望某个 `TraitObject` 字段里藏着“某角色的特性值”——那不在它身上。要改世界状态应操作 `Hero` 的特性容器，而非这个定义对象。

## 何时使用 / 何时不要使用

- **使用**：遍历或索引全部特性定义（`TraitObject.All`）；用 `DefaultTraits.Valor` 等静态属性拿到具体定义，再传给 `GetTraitLevel` / `SetTraitLevel`；依据 `IsHidden` 决定 UI 是否展示该特性。
- **不要使用**：不要把 `TraitObject` 当作“玩家当前特性等级”的存储——它只持有定义区间。需要的是 `Hero` / `CharacterObject` 上的 `PropertyOwner<TraitObject>`。
- **不要手动 new**：未经过 `RegisterPresumedObject` 注册的对象不会出现在 `TraitObject.All`，也不会被 `DefaultTraits` 暴露，等于废对象。
- **不要跨 Game 缓存引用**：特性对象在战役加载时注册，存档/重载后身份以 `stringId` 重新解析，长期持有旧引用可能指向已失效实例。

## 依赖图

- 上游：[MBObjectManager](../../campaign-ext/MBObjectManager/)（`Game.Current.ObjectManager.RegisterPresumedObject` 在战役初始化时登记每个 `TraitObject`；`All` 来自 `Campaign.Current.AllTraits`）。
- 定义方：[CharacterObject](../CharacterObject/) 命名空间内的 `DefaultTraits` 持有全部 `TraitObject` 静态引用（`DefaultTraits.Valor` 等），并在 `RegisterAll` 中统一 `Initialize`。
- 持有状态方：[Hero](../Hero/) 以 `_heroTraits`（`PropertyOwner<TraitObject>`）保存每个英雄的特性等级，`GetTraitLevel` / `SetTraitLevel` 直接读写它；[CharacterObject](../CharacterObject/) 以 `_characterTraits` 保存兵种模板的特性，`GetTraitLevel` 在 `IsHero` 时委托 `HeroObject`、否则读模板自身。
- 同层兄弟：[PerkObject](../PerkObject/) 与 `TraitObject` 同属角色成长（`CharacterDevelopment`）数据对象，但 Perk 是“已学会的专长”容器，Trait 是“性格/能力取向”，二者经 `HeroDeveloper` / `TraitLevelingHelper` 协同影响成长。
- 持有入口：[Campaign](../Campaign/) 上既有 `AllTraits`（全部特性定义），也有 `DefaultTraits`（便捷访问器）与 `PlayerTraitDeveloper`（玩家特性 XP 容器）。

## 风险与崩溃边界

- **改 `TraitObject` 自身等于改“标尺”**：`MinValue`/`MaxValue`/`IsHidden` 都是 `private set`，只有 `Initialize` 在注册期写入一次。运行期若通过反射等手段改它们，会影响全部角色对该特性的解释（尤其 `SetTraitLevel` 用 `MinValue/MaxValue` 做 `ClampInt` 夹值），属于破坏性行为。
- **特性等级不在 `TraitObject` 上**：新手常误以为 `trait.Valor` 能拿到英雄的英勇值。`TraitObject` 只是定义，`DefaultTraits.Valor` 是定义对象；真正等级在 `Hero._heroTraits`。读错对象会得到 `0` 或编译错误。
- **`Hero.GetTraitLevel` 在 `_heroTraits == null` 时返回 0**：尚未完成角色初始化（如创建流程早期）就查询会安全返回 `0`，但这可能是“还没初始化”而非“真为 0”，逻辑上不要据此断定角色无该特性。
- **`SetTraitLevel` 会静默夹值**：传入超出 `[MinValue, MaxValue]` 的值会被 `MBMath.ClampInt` 截断（如给 `Valor` 传 `5` 实际只存 `2`），不会报错，调试时容易误以为写入成功。
- **未注册对象不可达**：自己 `new TraitObject("x")` 而不走 `RegisterPresumedObject`，它既不在 `TraitObject.All`，也不被 `DefaultTraits` 暴露，任何按 `DefaultTraits.Xxx` 取定义的代码都拿不到它。

## 成员说明

### 静态索引

#### `public static MBReadOnlyList<TraitObject> All`
当前战役里**全部已注册的特性定义**列表，底层是 `Campaign.Current.AllTraits`。遍历它可以拿到 `Valor`、`Honor`、`Mercy`、`Calculating`、以及隐藏的 `Commander`、`Surgery`、`Thug` 等所有 `TraitObject`，常用于批量检查或 UI 罗列。

### 取值约束与可见性（均为 `private set`，仅注册期由 `Initialize` 写入）

#### `public int MinValue`
该特性允许的取值**下界**。性格类特性多为 `-2`（表示负面取向，如懦弱/吝啬），频率/技能类隐藏特性多为 `0`。`SetTraitLevel` 会据此夹值。

#### `public int MaxValue`
该特性允许的取值**上界**。性格类为 `2`，隐藏的能力/技能类为 `20`。它定义了某取向最多能强化到什么程度。

#### `public bool IsHidden`
该特性是否**不对玩家显示**。值为 `true` 的有 `Frequency`、`Commander`、`Surgery`、`Tracking`、`Blacksmith`、`SergeantCommandSkills`、`Siegecraft`、`RogueSkills`、`ScoutSkills`、`Trader`、`Thug`、`Smuggler`、`NavalSoldier` 等内部取向；`false` 的为 `Valor`、`Honor`、`Mercy`、`Generosity`、`Calculating` 及四个 `Persona*`、以及 `Egalitarian`/`Oligarchic`/`Authoritarian` 等玩家可见取向。

### 生命周期

#### `public TraitObject(string stringId) : base(stringId)`
构造器只把 `stringId` 交给基类 `PropertyObject`，**不含任何数值/文本**。真正填值由随后的 `Initialize` 完成，且对象须先经 `RegisterPresumedObject` 注册。

#### `public void Initialize(TextObject name, TextObject description, bool isHidden, int minValue, int maxValue)`
在战役初始化阶段由 `DefaultTraits.InitializeAll` 调用，写入本地化名称、描述、`IsHidden`，以及取值区间 `MinValue`/`MaxValue`，随后触发 `AfterInitialized`。`name` 与 `description` 来自 `PropertyObject` 的对应属性。运行期不应再次调用——它会覆盖已注册的区间定义。

## 示例

### 示例 1：读取玩家英雄在多个性格特性上的等级

```csharp
// DefaultTraits.Valor 等是静态暴露的 TraitObject 定义；等级由 Hero 持有
int valor = Hero.MainHero.GetTraitLevel(DefaultTraits.Valor);
int honor = Hero.MainHero.GetTraitLevel(DefaultTraits.Honor);
int mercy = Hero.MainHero.GetTraitLevel(DefaultTraits.Mercy);
if (valor >= 1 && mercy >= 1)
{
    // 该英雄偏向英勇且仁慈，对话节点可选择“挺身而出”的台词分支
    InformationManager.DisplayMessage(new TextObject("{=!}这位领主既英勇又仁慈。"));
}
```

### 示例 2：遍历全部可见特性并列出取值区间

```csharp
// TraitObject.All 来自 Campaign.Current.AllTraits，包含隐藏与可见的全部定义
foreach (TraitObject trait in TraitObject.All)
{
    if (!trait.IsHidden)
    {
        int playerLevel = Hero.MainHero.GetTraitLevel(trait);
        // 在角色面板里展示：特性名 + 当前等级 + 允许区间 [MinValue, MaxValue]
        MBLog.Log(trait.Name + "：" + playerLevel + " (" + trait.MinValue + "~" + trait.MaxValue + ")");
    }
}
```

### 示例 3：通过行为给予特性经验并最终提升等级

```csharp
// TraitLevelingHelper 在战斗获胜时按贡献给玩家加 Valor 经验；
// 经验累计后由 CharacterDevelopmentModel 换算成等级，并用 SetTraitLevel 写入
int before = Hero.MainHero.GetTraitLevel(DefaultTraits.Valor);
TraitLevelingHelper.OnBattleWon(PlayerEncounter.Current.MapEvent, contribution: 0.8f);
int after = Hero.MainHero.GetTraitLevel(DefaultTraits.Valor);
// after 有可能比 before 高（也可能因夹值仍停在 MaxValue）
```

## 参见

- [↑ 父级：战役 API 索引](../)
- [↔ Hero](../Hero/) — 以 `_heroTraits`（`PropertyOwner<TraitObject>`）持有英雄的特性等级，`GetTraitLevel`/`SetTraitLevel` 读写它
- [↔ CharacterObject](../CharacterObject/) — 兵种模板的特性存于 `_characterTraits`，`IsHero` 时委托 `HeroObject`
- [↔ DefaultTraits](../../campaign-ext/DefaultTraits/) — 全部 `TraitObject` 的静态定义入口（`DefaultTraits.Valor` 等）
- [↔ PerkObject](../PerkObject/) — 同属角色成长层的“专长”数据对象，与特性协同影响成长
- [↔ Campaign](../Campaign/) — `Campaign.Current.AllTraits` / `DefaultTraits` / `PlayerTraitDeveloper` 均挂载于此
- [↔ MBObjectManager](../../campaign-ext/MBObjectManager/) — 特性定义经 `RegisterPresumedObject` 注册进对象管理器
