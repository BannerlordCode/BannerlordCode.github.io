---
title: "DefaultSkills"
description: "18 个静态 SkillObject 属性的门面：每个 getter 都是 Game.Current.DefaultSkills._skillXxx 的一层转发，实例由 Game.InitializeDefaultGameObjects 构造并逐个 RegisterPresumedObject 注册进 ObjectManager。"
---

# DefaultSkills

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class DefaultSkills`
**Base:** 无（仅隐式 `System.Object`；无接口、无基类）
**File:** `TaleWorlds.Core/DefaultSkills.cs`（全文 366 行 / 13267 字节）

> 核对记录：读了 `TaleWorlds.Core/DefaultSkills.cs`（13267 B，全文 18 属性 + 18 私有字段 + 4 方法逐个抄）+ `TaleWorlds.Core/Game.cs:217`（`public DefaultSkills DefaultSkills { get; private set; }`）与 `:589`（`InitializeDefaultGameObjects()` 里 `this.DefaultSkills = new DefaultSkills();`）+ `TaleWorlds.Core/SkillObject.cs:28/40`（构造器与 `Initialize`）+ `TaleWorlds.Core/DefaultCharacterAttributes.cs:82`（同款 `RegisterPresumedObject` 写法）+ 全树 60+ 处 `DefaultSkills.X` 消费点（`SandBox/GameComponents/SandboxAgentApplyDamageModel.cs`、`SandboxAgentStatCalculateModel.cs`、`SandBox/CampaignBehaviors/TavernEmployeesCampaignBehavior.cs`、`BoardGameCampaignBehavior.cs`、`AlleyCampaignBehavior.cs`）+ `TaleWorlds.CampaignSystem/Hero.cs:1770` 的 `GetSkillValue(SkillObject)` + `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs:120` 的 `GetEffectiveSkill`。约 35 min。最难判断点：18 个静态属性的 getter 全是 `Game.Current.DefaultSkills._skillXxx` 的同形转发，所以在 `Game.Current` 赋值之前读任何一个都会 NRE；而 `Create(stringId)` 用的是 `RegisterPresumedObject`，意味着字符串 id 重复注册时返回旧对象而非抛异常。

## 概述

`DefaultSkills` 是**「18 个官方技能对象的静态门面」**。它本身不做任何技能逻辑，只是把 18 个 `SkillObject` 实例暴露成 18 个 `public static` 属性。

它的结构极其对称：

- **18 个 `public static SkillObject` 属性**（`OneHanded` … `Engineering`），每个 getter 的函数体都是**同一行**：`return DefaultSkills.Instance._skillXxx;`
- **18 个 `private SkillObject _skillXxx;` 字段**，顺序与属性**相反**（`_skillEngineering` 在最前，`_skillOneHanded` 在最后）。
- **1 个 `private static DefaultSkills Instance => Game.Current.DefaultSkills;`**——所有静态属性的唯一数据源。
- **1 个 `private SkillObject Create(string stringId)`**：`Game.Current.ObjectManager.RegisterPresumedObject<SkillObject>(new SkillObject(stringId));`
- **1 个 `private void InitializeAll()`**：18 次 `Initialize(TextObject, TextObject, CharacterAttribute[])` 调用，给每个技能灌名称、描述和「靠哪个属性驱动」。
- **1 个 `public DefaultSkills()`**：`this.RegisterAll();`
- **1 个 `private void RegisterAll()`**：18 次 `this.Create("Xxx")` + 末尾一次 `this.InitializeAll();`

**实例的生命周期只有一处**：`Game.InitializeDefaultGameObjects()`（`Game.cs:586-592`）里 `this.DefaultSkills = new DefaultSkills();`。它和 `DefaultCharacterAttributes`、`DefaultBannerEffects`、`DefaultItemCategories`、`DefaultSiegeEngineTypes` 并排，**全部在游戏启动的默认对象初始化阶段一次性建好**。

## 心智模型

把它当成**「按 `StringId` 索引的技能注册表 + 一层静态转发」**，理解它要抓住三件事。

**第一，技能的 `StringId` 是真正的身份，显示名不是。** `Create("Crafting")` 建出来的 `SkillObject`，它的 `StringId` 是 `"Crafting"`，而 `Initialize` 给它灌的显示名是 `{=smithingskill}Smithing`——**`StringId` 是 `Crafting`，游戏里显示的是 `Smithing`**。这个技能在 1.3.0 里没有 `Crafting` 这个公开属性，而是 `DefaultSkills.Crafting` 指向 `"Crafting"`，[SkillObject](../SkillObject) 里保存的显示名却是 Smithing。**你在 mod 里按名字找技能时要找 `StringId`，按 XML 写显示名时用本地化 key。**

**第二，18 个技能按 6 个属性三分组。** `InitializeAll()` 给每个技能传的第三个参数是 `new CharacterAttribute[] { … }`，**只传一个**，形成严格的 6 × 3 分布：

| 属性 | 三个技能 |
| --- | --- |
| `DefaultCharacterAttributes.Vigor` | `OneHanded`、`TwoHanded`、`Polearm` |
| `DefaultCharacterAttributes.Control` | `Bow`、`Crossbow`、`Throwing` |
| `DefaultCharacterAttributes.Endurance` | `Riding`、`Athletics`、`Crafting` |
| `DefaultCharacterAttributes.Cunning` | `Scouting`、`Tactics`、`Roguery` |
| `DefaultCharacterAttributes.Social` | `Charm`、`Leadership`、`Trade` |
| `DefaultCharacterAttributes.Intelligence` | `Steward`、`Medicine`、`Engineering` |

注意 `InitializeAll()` 里的书写顺序与 `RegisterAll()` 不同：`RegisterAll` 按 OneHanded→Engineering 的顺序创建，`InitializeAll` 却是先 OneHanded/TwoHanded/Polearm/Bow/Crossbow/Throwing/Riding/Athletics/Crafting，然后**Scouting 在 Tactics 之前**（`RegisterAll` 里是 Tactics 在 Scouting 前）。**两个列表顺序不一致，但每个技能都有独立的字段，所以不影响正确性。**

**第三，`static` 属性是转发，不是缓存。** `private static DefaultSkills Instance { get { return Game.Current.DefaultSkills; } }`——**每次读 `DefaultSkills.OneHanded` 都要走两层属性跳转**（静态属性 → `Instance` → `Game.Current` → 实例字段）。所以：

- **`Game.Current` 赋值之前读任何一个都会 NRE。** `Game.cs:589` 的 `new DefaultSkills()` 之前，`DefaultSkills.OneHanded` 就是一条通往 null 的路。这在 `MBSubModuleBase` 的静态初始化或非常早的启动钩子里会炸。
- **没有「替换成别的技能对象」的官方路径。** 实例字段是 `private`，`DefaultSkills` 属性在 `Game` 上是 `{ get; private set; }`。**想换技能实现，唯一途径是 `RegisterPresumedObject` 的重复注册语义**（见风险一节）。

## 关键成员

### 18 个静态属性（按 `RegisterAll()` 的创建顺序）

| 属性 | `StringId` | 显示名本地化 key | 驱动属性 | 这个成员是做什么用的 |
| --- | --- | --- | --- | --- |
| `OneHanded` | `"OneHanded"` | `{=PiHpR4QL}` | `Vigor` | 单手武器精通。**最常被查的一个**——`SandboxAgentApplyDamageModel.cs:71` 的 `currentUsageItem.RelevantSkill == DefaultSkills.OneHanded` 是整个近战伤害模型的分流入口，同处还有 `PerkHelper.AddEpicPerkBonusForCharacter(DefaultPerks.OneHanded.WayOfTheSword, characterObject, DefaultSkills.OneHanded, …)`。 |
| `TwoHanded` | `"TwoHanded"` | `{=t78atYqH}` | `Vigor` | 双手武器精通。`SandboxAgentApplyDamageModel.cs:94` 与 `SandboxAgentStatCalculateModel.cs:284` 分流点。 |
| `Polearm` | `"Polearm"` | `{=haax8kMa}` | `Vigor` | 长柄武器精通。`SandboxAgentApplyDamageModel.cs:124/649/670/706` 是消费最密集的技能。 |
| `Bow` | `"Bow"` | `{=5rj7xQE4}` | `Control` | 弓。`SandboxAgentStatCalculateModel.cs:128/223/230` 与弓马协同判定。 |
| `Crossbow` | `"Crossbow"` | `{=TTWL7RLe}` | `Control` | 弩。`SandboxAgentApplyDamageModel.cs:215/422/424` 处理骑乘弩与消耗品。 |
| `Throwing` | `"Throwing"` | `{=2wclahIJ}` | `Control` | 投掷。`SandboxAgentApplyDamageModel.cs:240/446/521` 处理飞刀/标枪/锤镖。 |
| `Riding` | `"Riding"` | `{=p9i3zRm9}` | `Endurance` | 骑术。`SandboxAgentApplyDamageModel.cs:300` 用 `MissionGameModels.Current.AgentStatCalculateModel.GetEffectiveSkill(agent, DefaultSkills.Riding)` 算弓马协同伤害。 |
| `Athletics` | `"Athletics"` | `{=skZS2UlW}` | `Endurance` | 体能（跑酷）。与伤害模型关系最弱的一个。 |
| `Crafting` | `"Crafting"` | `{=smithingskill}`（显示为 **Smithing**） | `Endurance` | **唯一 `StringId` 与显示名不一致的技能**。铁匠相关的一切都读它。 |
| `Tactics` | `"Tactics"` | `{=m8o51fc7}` | `Cunning` | 战术。`TavernEmployeesCampaignBehavior.cs:372` 的酒馆雇员评分用 `hero.GetSkillValue(DefaultSkills.Tactics)`。 |
| `Scouting` | `"Scouting"` | `{=LJ6Krlbr}` | `Cunning` | 侦察。`TavernEmployeesCampaignBehavior.cs:356`。 |
| `Roguery` | `"Roguery"` | `{=V0ZMJ0PX}` | `Cunning` | 恶棍。`AlleyCampaignBehavior.cs:1201` 的 `Hero.MainHero.AddSkillXp(DefaultSkills.Roguery, …)`。 |
| `Charm` | `"Charm"` | `{=EGeY1gfs}` | `Social` | 魅力。`BoardGameCampaignBehavior.cs:98` 的棋盘赌博胜率。 |
| `Leadership` | `"Leadership"` | `{=HsLfmEmb}` | `Social` | 统御。`TavernEmployeesCampaignBehavior.cs:371`。 |
| `Trade` | `"Trade"` | `{=GmcgoiGy}` | `Social` | 贸易。`TavernEmployeesCampaignBehavior.cs:368/501`。 |
| `Steward` | `"Steward"` | `{=stewardskill}` | `Intelligence` | 管家。`BoardGameCampaignBehavior.cs:501` 与 `TavernEmployeesCampaignBehavior.cs:365`。 |
| `Medicine` | `"Medicine"` | `{=JKH59XNp}` | `Intelligence` | 医术。`TavernEmployeesCampaignBehavior.cs:362`。 |
| `Engineering` | `"Engineering"` | `{=engineeringskill}` | `Intelligence` | 工程学。`TavernEmployeesCampaignBehavior.cs:359`。 |

### 4 个方法

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| （构造函数） | `public DefaultSkills()` | 唯一构造器，函数体只有 `this.RegisterAll();` 一行。**只能通过 `new DefaultSkills()` 或 `Game.InitializeDefaultGameObjects()` 产生实例**，没有第二个入口。 |
| `RegisterAll` | `private void RegisterAll()` | 18 次 `this.Create("Xxx")`（按注册顺序），末尾调 `this.InitializeAll()`。**每个 `Create` 都会往 `ObjectManager` 注册一次**，所以 `new DefaultSkills()` 有全局副作用。 |
| `InitializeAll` | `private void InitializeAll()` | 18 次 `this._skillXxx.Initialize(new TextObject("{=key}Name", null), new TextObject("{=key}Description", null), new CharacterAttribute[] { … })`。**它必须在 `RegisterAll` 的 18 次 `Create` 之后执行**，否则字段还是 null 会 NRE。 |
| `Create` | `private SkillObject Create(string stringId)` | `Game.Current.ObjectManager.RegisterPresumedObject<SkillObject>(new SkillObject(stringId));`。**「Presumed」是关键词**——同一个 `stringId` 重复注册返回已存在对象而不是抛异常。 |
| `Instance` | `private static DefaultSkills Instance { get { return Game.Current.DefaultSkills; } }` | 全部 18 个静态属性的唯一数据源。`private static` 但无 setter——**模组拿不到也改不了它**。 |

### 18 个私有字段

`_skillEngineering` / `_skillMedicine` / `_skillLeadership` / `_skillSteward` / `_skillTrade` / `_skillCharm` / `_skillRoguery` / `_skillScouting` / `_skillTactics` / `_skillCrafting` / `_skillAthletics` / `_skillRiding` / `_skillThrowing` / `_skillCrossbow` / `_skillBow` / `_skillPolearm` / `_skillTwoHanded` / `_skillOneHanded`——**全部 `private`，全部只在 `RegisterAll` 里被赋值一次**。声明顺序与属性顺序相反，但字段名一一对应，无歧义。

## 真实示例

读一个英雄的技能值（官方最常见的两条路径之一）：

```csharp
public class MySkillGateLogic : MissionBehaviorBase
{
    public override void OnMissionTick(float dt)
    {
        Hero hero = Hero.MainHero;
        if (hero == null)
        {
            return;
        }
        // Hero.GetSkillValue(SkillObject) 是英雄技能的主入口
        int engineering = hero.GetSkillValue(DefaultSkills.Engineering);
        int medicine = hero.GetSkillValue(DefaultSkills.Medicine);
        if (engineering >= 200)
        {
            MBDebug.Print("[MyMod] 工匠技能已达标");
        }
    }
}
```

在任务里读「有效技能」（含装备/buff 加成，与英雄的裸技能值不同）：

```csharp
public class MyMissionSkillLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Agent agent = Agent.Main;
        if (agent == null || !agent.IsActive())
        {
            return;
        }
        // AgentStatCalculateModel.GetEffectiveSkill(Agent, SkillObject) 才是任务侧要用的
        int riding = MissionGameModels.Current.AgentStatCalculateModel.GetEffectiveSkill(agent, DefaultSkills.Riding);
        int polearm = MissionGameModels.Current.AgentStatCalculateModel.GetEffectiveSkill(agent, DefaultSkills.Polearm);
        MBDebug.Print("[MyMod] riding=" + riding + " polearm=" + polearm);
    }
}
```

按武器选技能——这是沙盒伤害模型的核心分流写法：

```csharp
public class MyWeaponSkillLogic : MissionLogic
{
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        if (affectorAgent == null || !affectorAgent.IsActive())
        {
            return;
        }
        // MissionWeapon.CurrentUsageItem 就是 WeaponComponentData，RelevantSkill 在它上面
        WeaponComponentData weapon = affectorAgent.WieldedWeapon.CurrentUsageItem;
        if (weapon == null)
        {
            return;
        }
        // 比较的是 SkillObject 引用，不是 StringId
        SkillObject relevant = weapon.RelevantSkill;
        if (relevant == DefaultSkills.OneHanded)
        {
            MBDebug.Print("[MyMod] 单手命中");
        }
        else if (relevant == DefaultSkills.TwoHanded)
        {
            MBDebug.Print("[MyMod] 双手命中");
        }
        else if (relevant == DefaultSkills.Polearm)
        {
            MBDebug.Print("[MyMod] 长柄命中");
        }
    }
}
```

注册自己的技能（**必须在 `Game.InitializeDefaultGameObjects()` 之后**，否则官方 18 个还没建完）：

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        base.InitializeGameStarter(game, gameStarterObject);
        // 用与 DefaultSkills.Create 相同的 API，重复 StringId 会拿到已存在对象
        SkillObject mySkill = game.ObjectManager.RegisterPresumedObject<SkillObject>(new SkillObject("MySkill"));
        mySkill.Initialize(
            new TextObject("{=MySkillKey}我的技能", null),
            new TextObject("{=MySkillDesc}一个模组自定义技能。", null),
            new CharacterAttribute[] { DefaultCharacterAttributes.Intelligence });
        MBInformationManager.ShowHint("已注册技能：" + mySkill.StringId);
    }
}
```

## 风险与边界

- **`Game.Current` 之前读任何静态属性都 NRE。** 18 个 getter 全走 `Game.Current.DefaultSkills`。**在静态构造器、`MBSubModuleBase` 的早期钩子、或任何早于 `Game.InitializeDefaultGameObjects()` 的时刻读 `DefaultSkills.OneHanded` 都会崩。** 需要提前用就把引用缓存到你自己的静态字段里，但要缓存到 `InitializeGameStarter` 之后。
- **`Crafting` 的 `StringId` 是 `"Crafting"`，显示名是 Smithing。** `InitializeAll()` 里灌的是 `new TextObject("{=smithingskill}Smithing", null)`。**按显示名找技能会找不到**，反之按 `StringId` 找却对得上。
- **`RegisterPresumedObject` 不抛重复异常。** `Create("OneHanded")` 调第二次会返回**已存在的那个对象**，你在 `RegisterAll` 之前先注册 `"OneHanded"` 就会让官方 `RegisterAll` 的赋值静默失败于你的对象上。**这是「预注册」技巧能生效的原因，也是它危险的原因**——你没有收到任何警告。
- **没有替换技能实现的官方 API。** 实例字段 `private`、`Game.DefaultSkills` 是 `{ get; private set; }`、`Instance` 是 `private static` 且无 setter。**想改技能的属性关联或描述，只能覆盖 `SkillObject.Initialize` 之外的手段**（例如自己注册一个同 `StringId` 的对象并在它之前抢跑）。
- **`static` 属性每次读都走两层跳转。** 不是缓存字段，是 `Game.Current.DefaultSkills._skillXxx`。在 `OnMissionTick` 这种每帧调用的路径上高频读会持续付这个成本——**把它存进局部变量**。
- **属性比较是引用比较。** 全树的 `currentUsageItem.RelevantSkill == DefaultSkills.OneHanded` 比较的是 `SkillObject` 对象引用。**如果你自己 `new SkillObject("OneHanded")` 而不是走 `RegisterPresumedObject`，你会得到一个不相等的对象**，武器的 `RelevantSkill` 就永远匹配不上你的技能。**这是自定义技能最常见的失败方式。**
- **不要按 `Enum.GetValues(typeof(SkillType))` 找技能。** `SkillType` 在 1.3.0 的 `bannerlord-1.3.0/` 里**只有 `SkillType.cs` 一处声明，没有任何代码给它赋值**（`grep -rn "SkillType"` 只命中定义文件）。技能的分组请用 `DefaultSkills` 的 18 个静态属性或 [SkillObject](../SkillObject) 自己的字段。
- **`InitializeAll` 与 `RegisterAll` 的顺序敏感。** 18 次 `Create` 全部完成才调 `InitializeAll`。你自己写类似结构时把顺序颠倒会 NRE。
- **私有字段顺序与属性顺序相反。** 源码里 `_skillEngineering` 在文件最前、`_skillOneHanded` 在最后。**别按声明顺序推断对应关系**——用属性名对字段名。
- **这个类没有存档。** 它不是 `MBObjectBase`，没有 `StringId` 属性注解意义上的存档，18 个字段也不在任何 `[SaveableField]` 之下。**它是每次游戏启动重建的纯运行期对象。**

## 跨版本提示

`DefaultSkills.cs` 在 1.3.0（366 行 / 13267 字节）、1.3.15（312 行 / 13033 字节）、1.4.6、1.4.7、1.5.3（都是 312 行 / 13033 字节）之间——**18 个静态属性、18 个私有字段、4 个方法的签名与数量完全一致**（`grep -E "public |private SkillObject|this.Create\("` 逐版 diff 后 1.3.0 vs 1.3.15、1.3.15 vs 1.5.3 都是空 diff）。行数与字节的差异来自本地化文本字面量与格式，**不影响 API**。

`bannerlord-1.4.5/` 那棵树保存的是去掉了 `// Token:` 注释的精简版，只有 135 行 / 8369 字节——**存储格式差异，不是成员被裁剪**。

`Game.InitializeDefaultGameObjects()` 里的 `this.DefaultSkills = new DefaultSkills();` 与 `public DefaultSkills DefaultSkills { get; private set; }` 在这几个版本里都存在，所以**18 个 `StringId`（`"OneHanded"` … `"Engineering"`）跨 1.3 → 1.5 全部稳定**。你的 `weapon.RelevantSkill == DefaultSkills.Polearm` 在任何版本上行为一致。

会随版本变的是**技能的属性归属**（`InitializeAll` 第三个参数里那个 `DefaultCharacterAttributes.X`）以及**本地化描述文本**——那些是数据不是代码。`1.5.x` 会继续加技能（航海、电子竞技类），但**新增技能是加新属性而不是改这 18 个**，所以旧代码不会受影响。

## 依赖关系

- 宿主与生命周期：[Game](../Game) 的 `public DefaultSkills DefaultSkills { get; private set; }` 与 `InitializeDefaultGameObjects()` 是本类**唯一的实例产生点**，18 个静态属性的 `Instance` 转发也回到它
- 产出对象：[SkillObject](../SkillObject) 的 `SkillObject(string stringId)` 构造器与 `Initialize(TextObject name, TextObject description, CharacterAttribute[] attributes)` 是 `Create` 与 `InitializeAll` 唯一调用的两个成员
- 注册机制：[MBObjectManagerExtensions](../MBObjectManagerExtensions) 与 `MBObjectManager.RegisterPresumedObject<T>` 提供「重复 id 返回旧对象」的注册语义，本类的 18 次 `Create` 全部依赖它
- 属性关联：`InitializeAll` 传的 `DefaultCharacterAttributes` 来自 [DefaultCharacterAttributes](../DefaultCharacterAttributes)，18 个技能按 6 属性 × 3 的严格分布挂靠
- 英雄侧消费：`Hero.GetSkillValue(SkillObject)`（[Hero](../../campaign/Hero) 页）是战役层的读取入口，`Hero.MainHero.AddSkillXp(DefaultSkills.X, xp)` 是写入入口
- 任务侧消费：[AgentStatCalculateModel](../../mission-ext/AgentStatCalculateModel) 的 `GetEffectiveSkill(Agent, SkillObject)` / `GetEffectiveSkillForWeapon(Agent, WeaponComponentData)` 是任务层的读取入口；[WeaponComponentData](../WeaponComponentData) 的 `RelevantSkill` 是与之比较的另一边
- 配套：[DefaultPerks](../../campaign/DefaultPerks) 的 `DefaultPerks.OneHanded.WayOfTheSword` 等 perk 与本类的技能按同一套名字配对，[AgentAttackType](../AgentAttackType) 则是完全独立的另一族枚举（战斗方式而非技能）
- 桶首页：[core-extra API 分区](../)