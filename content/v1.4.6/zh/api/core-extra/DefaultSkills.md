---
title: "DefaultSkills"
description: "十八个内置技能的门面：Game 构造时 new 出一个实例注册到 MBObjectManager，静态属性每次访问都转发到 Game.Current.DefaultSkills 的私有字段。"
---

# DefaultSkills

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class DefaultSkills`
**File:** `TaleWorlds.Core/DefaultSkills.cs`

## 概述

312 行，一个 **不是静态类** 的静态门面。表面上是十八个 `public static SkillObject` 属性（`OneHanded` / `TwoHanded` / `Polearm` / `Bow` / `Crossbow` / `Throwing` / `Riding` / `Athletics` / `Crafting` / `Tactics` / `Scouting` / `Roguery` / `Charm` / `Leadership` / `Trade` / `Steward` / `Medicine` / `Engineering`），实际上一行实例字段都没有——十八个 `SkillObject` 存在私有字段 `_skillOneHanded` … `_skillEngineering` 里。

转发路径只有一条：`public static SkillObject OneHanded { get { return DefaultSkills.Instance._skillOneHanded; } }`，而私有的 `Instance` 就是 `Game.Current.DefaultSkills`。也就是说**每个静态属性访问都去摸一次 `Game.Current`**。

实例的生命周期是：`Game` 的构造函数末尾 `this.DefaultSkills = new DefaultSkills();`，构造器立刻调 `RegisterAll()`，后者对十八个技能各调一次 `Create(stringId)` 再调 `InitializeAll()` 填名称、描述、关联属性。

## 心智模型

把它想成**一张贴在静态语法上的实例字段表**。你写 `DefaultSkills.Riding`，实际发生的是：`Game.Current` → `.DefaultSkills` → `._skillRiding`。三步里任何一步为 null 就是空引用。

三条必须记住的事实：

1. **它是游戏启动早期建起来的，不是类型初始化时。** `Create` 内部是 `Game.Current.ObjectManager.RegisterPresumedObject<SkillObject>(new SkillObject(stringId))`——依赖 `Game.Current` 已经存在。所以 **`DefaultSkills.OneHanded` 在 `OnSubModuleLoad` 阶段访问会抛空引用**，那时候 `Game.Current` 要么为 null，要么它的 `DefaultSkills` 还没赋值（`Game` 构造体末尾才赋）。

2. **`RegisterPresumedObject` 不读 XML。** 十八个 `SkillObject` 是代码 `new` 出来的，id 就是 `"OneHanded"` 这种硬编码字符串。它们的名称与描述由 `InitializeAll` 用**英文硬编码 `TextObject`** 填（带 `{=xxxxxx}` 键，但键值指向游戏自己的本地化表）。`InitializeAll` 里还顺带把每个技能关联到 `DefaultCharacterAttributes` 的一个属性：`OneHanded` / `TwoHanded` / `Polearm` → `Vigor`，`Bow` / `Crossbow` / `Throwing` → `Control`，`Riding` / `Athletics` / `Crafting` → `Endurance`，`Scouting` / `Tactics` / `Roguery` → `Cunning`，`Charm` / `Leadership` / `Trade` → `Social`，`Steward` / `Medicine` / `Engineering` → `Intelligence`。

3. **展示名 `Crafting` 与展示文本 `Smithing` 不一致。** 静态属性叫 `Crafting`，`InitializeAll` 里给它的名称文本是 `{=smithingskill}Smithing`，id 也是 `"Crafting"`。**做本地化或 UI 显示时别用属性名当 key。** 同理 `DefaultSkills.Trade` / `Steward` / `Engineering` 的键分别是 `tradegmcgoi` 风格的内部键，不是属性名。

第三条之外，还有一条类型层面的事：**它是 `public class`，不是 `static class`，可以被继承**。没有任何成员是 `virtual`，所以继承它没有可覆盖点，只能再加新的静态属性；而且子类实例不会自动注册进 `Game.Current.DefaultSkills`，静态属性仍然指向游戏自己那一份。

## 关键成员

### 战斗系技能

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OneHanded` | `public static SkillObject OneHanded { get; }` | 单手武器精通。转发 `_skillOneHanded`，注册 id `"OneHanded"`，关联属性 `DefaultCharacterAttributes.Vigor`。 |
| `TwoHanded` | `public static SkillObject TwoHanded { get; }` | 双手武器精通。id `"TwoHanded"`，关联 `Vigor`。 |
| `Polearm` | `public static SkillObject Polearm { get; }` | 长柄武器精通。id `"Polearm"`，关联 `Vigor`。 |
| `Bow` | `public static SkillObject Bow { get; }` | 弓。id `"Bow"`，关联 `DefaultCharacterAttributes.Control`。 |
| `Crossbow` | `public static SkillObject Crossbow { get; }` | 弩。id `"Crossbow"`，关联 `Control`。 |
| `Throwing` | `public static SkillObject Throwing { get; }` | 投掷。id `"Throwing"`，关联 `Control`。 |

### 移动与生产

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Riding` | `public static SkillObject Riding { get; }` | 骑术。id `"Riding"`，关联 `DefaultCharacterAttributes.Endurance`。**`ItemObject` 的 `RelevantSkill` 在马匹物品上就返回它。** |
| `Athletics` | `public static SkillObject Athletics { get; }` | 体能。id `"Athletics"`，关联 `Endurance`。 |
| `Crafting` | `public static SkillObject Crafting { get; }` | 锻造。id `"Crafting"`，**显示名却是 `Smithing`**（`{=smithingskill}Smithing`）。关联 `Endurance`。 |

### 智谋与人际

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Scouting` | `public static SkillObject Scouting { get; }` | 侦察。id `"Scouting"`，关联 `DefaultCharacterAttributes.Cunning`。 |
| `Tactics` | `public static SkillObject Tactics { get; }` | 战术。id `"Tactics"`，关联 `Cunning`。 |
| `Roguery` | `public static SkillObject Roguery { get; }` | 狡诈。id `"Roguery"`，关联 `Cunning`。 |
| `Charm` | `public static SkillObject Charm { get; }` | 魅力。id `"Charm"`，关联 `DefaultCharacterAttributes.Social`。 |
| `Leadership` | `public static SkillObject Leadership { get; }` | 统御。id `"Leadership"`，关联 `Social`。 |
| `Trade` | `public static SkillObject Trade { get; }` | 交易。id `"Trade"`，关联 `Social`。 |
| `Steward` | `public static SkillObject Steward { get; }` | 管家。id `"Steward"`，关联 `DefaultCharacterAttributes.Intelligence`。 |
| `Medicine` | `public static SkillObject Medicine { get; }` | 医术。id `"Medicine"`，关联 `Intelligence`。 |
| `Engineering` | `public static SkillObject Engineering { get; }` | 工程。id `"Engineering"`，关联 `Intelligence`。 |

### 实例侧（私有或内部）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Instance` | `private static DefaultSkills Instance { get; }` | 恒等于 `Game.Current.DefaultSkills`。**每个静态属性的唯一数据源。** |
| `.ctor` | `public DefaultSkills()` | 构造体只调 `RegisterAll()`。`Game` 的构造体末尾 `new DefaultSkills()`。 |
| `RegisterAll` | `private void RegisterAll()` | 十八次 `Create(...)` 之后调 `InitializeAll()`。**先全注册再全初始化**，顺序固定。 |
| `Create` | `private SkillObject Create(string stringId)` | `Game.Current.ObjectManager.RegisterPresumedObject<SkillObject>(new SkillObject(stringId))`。**返回注册表里那个实例**，不是传入的那个。 |
| `InitializeAll` | `private void InitializeAll()` | 给每个 `SkillObject` 调 `Initialize(TextObject name, TextObject description, CharacterAttribute[] attributes)`。**属性名与展示名不一致的唯一一处是 `Crafting` / `Smithing`。** |
| `_skillOneHanded` … `_skillEngineering` | `private SkillObject` 字段，18 个 | 真实数据存储。**全部私有，没有任何公开的技能清单属性**——想枚举全部十八个只能自己列。 |

## 怎么用

### 怎么拿到它

`DefaultSkills`（`TaleWorlds.Core/DefaultSkills.cs:7`）是一个**只装静态属性的容器**——公开成员里只有 20 个 `public static SkillObject` 和一个 `public DefaultSkills()` 构造器（`:229`）。

它的静态属性背后是 `private static DefaultSkills Instance { get { return Game.Current.DefaultSkills; } }`（`:11-16`），所以**每一个 `DefaultSkills.Xxx` 都是对 `Game.Current` 的一次即时解引用**。19 个技能的 getter 长这样：`public static SkillObject OneHanded { get { return DefaultSkills.Instance._skillOneHanded; } }`（`:21-27`）。

实例本身由 `Game.InitializeDefaultGameObjects()` 里的 `this.DefaultSkills = new DefaultSkills();`（`Game.cs:587`）创建，构造器立刻调 `RegisterAll()`（`:229-231`），后者对每个技能执行 `Create(string stringId)`，实现是 `Game.Current.ObjectManager.RegisterPresumedObject<SkillObject>(new SkillObject(stringId))`（`:200-203`）。

### 典型用法

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

// 静态属性直接拿，不缓存到字段
SkillObject tactics = DefaultSkills.Tactics;      // DefaultSkills.cs:111
SkillObject smithing = DefaultSkills.Engineering;  // :191

// 给玩家加技能：走 Hero 的技能对象，不是 DefaultSkills
Hero hero = Hero.MainHero;
int before = hero.Skills.GetSkillValue(Tactics);

// 技能本体属性
CharacterAttribute[] attrs = tactics.Attributes;   // SkillObject.cs:25
TextObject howTo = tactics.HowToLearnSkillText;    // SkillObject.cs:51
```

### 最容易踩的坑

**在任何战役上下文之前读 `DefaultSkills.Xxx`，或者把结果缓存进静态字段跨局复用。** getter 是 `Game.Current.DefaultSkills`（`:11-16`），所以：主菜单、`MBSubModuleBase.OnSubModuleLoad`、甚至 `OnGameInitializationFinished` 之前去读，都是 `Game.Current` 为 null 的空引用；战役拆掉之后 `Game.Current.DefaultSkills` 也随 `Game` 一起没了。更麻烦的是 `DefaultSkills` 的构造器内部还要用 `Game.Current.ObjectManager`（`:202`）——**这意味着 `new DefaultSkills()` 只能在 `Game` 已经建好之后做**，不能在静态初始化里。

正确做法是现取现用，不要缓存：

```csharp
// 别这样：private static SkillObject _tactics = DefaultSkills.Tactics;
// 要这样：
SkillObject tactics = DefaultSkills.Tactics;   // 每次现取
```

第二个坑：这些静态属性返回的是**引擎内置的 `SkillObject` 实例本身**，不是副本。它们的属性（`Attributes`、`HowToLearnSkillText`）虽然都是 `{ get; private set; }`（`SkillObject.cs:25`/`:51`），但对象本身是共享单例；用 `Initialize(...)`（`SkillObject.cs:41`）去改它会影响到**所有**用到这个技能的领主和 UI 文本——所以自定义技能要 `new SkillObject("my_skill")` 自己注册，而不是改内置的。

## 真实示例

在战斗逻辑里取对应技能（先确认 `Game.Current` 与模型已就绪）：

```csharp
Game game = Game.Current;
if (game == null || game.DefaultSkills == null)
{
    Debug.Print("game not ready yet", 0);
    return;
}

SkillObject riding = DefaultSkills.Riding;
SkillObject smithing = DefaultSkills.Crafting;

Debug.Print("riding=" + riding.StringId + " name=" + riding.Name.ToString(), 0);
Debug.Print("crafting display=" + smithing.Name.ToString() + " id=" + smithing.StringId, 0);

SkillObject oneHanded = DefaultSkills.OneHanded;
for (int i = 0; i < oneHanded.Attributes.Length; i++)
{
    Debug.Print("attribute: " + oneHanded.Attributes[i], 0);
}
```

由武器类别反查技能——官方就是这么映射的：

```csharp
WeaponComponentData data = MBObjectManager.Instance
    .GetObject<ItemObject>("heavy_bearded_axe")
    .PrimaryWeapon;

SkillObject relevant = WeaponComponentData.GetRelevantSkillFromWeaponClass(data.WeaponClass);
Debug.Print("class=" + data.WeaponClass + " skill=" + relevant.StringId, 0);

SkillObject shieldSkill = WeaponComponentData.GetRelevantSkillFromWeaponClass(WeaponClass.SmallShield);
Debug.Print("shield -> " + shieldSkill.StringId, 0);

SkillObject undefinedSkill = WeaponComponentData.GetRelevantSkillFromWeaponClass(WeaponClass.Undefined);
Debug.Print("undefined maps to null: " + (undefinedSkill == null), 0);
```

按物品类别查对应技能（马匹物品走 `Riding`，其它无主武器返回 null）：

<!-- xml-id-unverifiable: v1.4.6 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.6 源码树均无法核对——该版本未随附 XML 语料。
```csharp
ItemObject horse = MBObjectManager.Instance.GetObject<ItemObject>("horse_empire_1");
ItemObject plate = MBObjectManager.Instance.GetObject<ItemObject>("plate_unicorn_1");

SkillObject horseSkill = horse.RelevantSkill;
SkillObject plateSkill = plate.RelevantSkill;

Debug.Print("horse skill=" + (horseSkill == null ? "null" : horseSkill.StringId), 0);
Debug.Print("plate skill=" + (plateSkill == null ? "null" : plateSkill.StringId), 0);
```

## 风险与边界

- **每个静态属性访问都读 `Game.Current`。** 早期阶段（`OnSubModuleLoad`、模块构造函数）访问必然抛空引用。
- **`Create` 依赖 `Game.Current.ObjectManager`。** 构造 `DefaultSkills` 的那一刻 `Game.Current` 必须已经可用，所以它只能在 `Game` 构造体内完成。
- **没有公开的技能清单。** 十八个私有字段、一个 `RegisterAll` 私有方法，**没有返回数组或列表的成员**。想遍历全部内置技能只能手写十八个静态属性的访问——或者遍历 `MBObjectManager` 里的 `SkillObject`（那会连同 XML 加载的自定义技能一起进来）。
- **属性名 ≠ id ≠ 展示名。** `Crafting` 的 id 是 `"Crafting"`、展示名是 `Smithing`；`OneHanded` 的展示名是 `One Handed`（带空格）。做本地化 key 或存档字段名时不要混用。
- **技能是代码注册的不是 XML 加载的。** `RegisterPresumedObject` 直接 new，不走 `LoadXML("Skills", ...)`。所以十八个内置技能一定在，但顺序上先于任何 XML 技能定义。
- **可以被继承但没有可覆盖点。** 所有静态属性都不是 `virtual` 也不属于实例成员。派生类加的静态属性不会被游戏侧看到。
- **`Create` 返回的是注册表实例。** 传入的 `new SkillObject(stringId)` 只是被注册的手续，真正返回的对象可能已被注册流程替换过。**永远用返回值，不要缓存构造时的临时对象。**
- **本地化文本硬编码在 C# 里。** 想换语言只能改这些 `{=key}` 指向的本地化表条目，改不了 `DefaultSkills` 本身（`TextObject` 一旦 `Initialize` 就定型）。
- **静态属性的读取成本不低。** 每次访问两次属性转发加一次 `Game.Current`。热循环里缓存到局部变量。

## 依赖关系

- 持有者：[Game](../Game) 的 `DefaultSkills` 属性在构造体末尾赋值 `new DefaultSkills()`
- 注册表：[MBObjectManager](../../campaign-ext/MBObjectManager) 的 `RegisterPresumedObject<SkillObject>` 是十八个技能唯一的落地途径
- 产出类型：[SkillObject](../SkillObject)，继承 [PropertyObject](../PropertyObject)，由 `Initialize(TextObject, TextObject, CharacterAttribute[])` 填充
- 属性关联：`DefaultCharacterAttributes` 枚举（`Vigor` / `Control` / `Endurance` / `Cunning` / `Social` / `Intelligence`），决定每级技能增长哪个角色属性
- 本地化：[TextObject](../../localization/TextObject)，十八组名称与描述在 `InitializeAll` 里以英文硬编码构造
- 反向消费者一：[WeaponComponentData](../WeaponComponentData) 的 `GetRelevantSkillFromWeaponClass` 按武器类别 switch 到本类静态属性
- 反向消费者二：[ItemObject](../ItemObject) 的 `RelevantSkill` 在没有 `PrimaryWeapon` 且是马匹物品时返回 `DefaultSkills.Riding`
- 战斗判定：`WeaponComponentData.RelevantSkill` 转发到同一个静态方法，所以「武器决定技能」这条链只有一个真源
- 模块地图：[module-map](../../../architecture/module-map)
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../SkillObject`](../SkillObject) · [`../PropertyObject`](../PropertyObject) · [`../WeaponComponentData`](../WeaponComponentData)
- 父索引：[`../_index`](../_index)
