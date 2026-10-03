---
title: "SkillObject"
description: "技能这一概念本身的载体：一个 sealed 的 PropertyObject，18 个内置技能全部由 DefaultSkills 在 C# 里 new 出来再注册，不走 XML 反序列化。"
---

# SkillObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class SkillObject : PropertyObject`
**Base:** `TaleWorlds.Core.PropertyObject` → `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/SkillObject.cs`（全文 62 行）

## 概述

`SkillObject` 回答一个很朴素的问题：「跆拳道」这个**概念**是什么。它是**技能身份**的载体，不是技能数值——数值在 [Hero](../../campaign/Hero) 侧的 `HeroDevSkill` 属性集里，技能**效果**在 `SkillEffect` 和各个 `XxxModel` 里。三者的分工必须先分清：`SkillObject` 提供「这个技能叫什么、有哪些属性归类」，`Hero` 提供「谁练到了第几级」，效果则走别的类。

它只有 5 个 public 成员，信息量少得惊人：

- `Attributes` —— `CharacterAttribute[]`，这个技能归到哪几个属性（Vigor / Control / Endurance / Cunning / Social / Intelligence）下。**属性的增删直接决定学速**：玩家加在 `Attributes` 里的点按比例分摊给数组里的每个属性。
- `Name` / `Description` —— 从 [PropertyObject](../PropertyObject) 继承的 `TextObject`，由 `Initialize` 填入。
- `StringId` —— 从 `MBObjectBase` 继承，全树硬编码字符串 `"OneHanded"`、`"Polearm"` 这样的标识符。

**这个类最反直觉、也最重要的事实是：它不从 XML 加载。** 全树搜 `SkillObject` 的反序列化路径，命中为 0——`SkillObject.cs` 里根本没有 `Deserialize` 重写，`TaleWorlds.ObjectSystem` 里也没有针对它的加载器。18 个内置技能是在 [DefaultSkills](../DefaultSkills) 的**构造函数**里纯手写 C# 造出来的：

```csharp
// DefaultSkills.RegisterAll()
this._skillOneHanded = this.Create("OneHanded");
this._skillTwoHanded = this.Create("TwoHanded");
// ... 共 18 个

// DefaultSkills.Create(string stringId)
return Game.Current.ObjectManager.RegisterPresumedObject<SkillObject>(new SkillObject(stringId));

// DefaultSkills.InitializeAll()
this._skillOneHanded.Initialize(new TextObject("{=PiHpR4QL}One Handed", null),
    new TextObject("{=yEkSSqIm}Mastery of fighting with one-handed weapons...", null),
    new CharacterAttribute[] { DefaultCharacterAttributes.Vigor });
```

所以 mod 加自定义技能的路径是「复制这套 C# 写法」，不是「加一条 XML」。`RegisterPresumedObject<T>` 是全树统一的对象注册惯用法，[DefaultItems](../../campaign/DefaultItems) 的 `DefaultItems.Create`、`DefaultTraits` / `DefaultPerks` / `DefaultPolicies` / `DefaultCulturalFeats` 乃至 [StoryModeBannerEffects](../../campaign-ext/StoryModeBannerEffects) 全都是同一个调用形状。

**`sealed`** 是这个类型最硬的约束：它不可继承。你没法写一个 `MySkillObject : SkillObject` 来挂额外字段，自定义技能必须就是 `SkillObject` 本身，把额外数据放到别处（静态字典、`XxxModel`，或挂在关联的 `SkillEffect` 上）。

## 心智模型

**第一步，理解它什么时候被创建。** `DefaultSkills` 是 `Game` 的一个字段，它的构造器调 `RegisterAll()`——先 `Create` 全部 18 个（此时只有 `StringId`，`Name` 是 null），再 `InitializeAll()` 逐个填 `Name` / `Description` / `Attributes`。**创建与填充是两趟**，不是一趟。所以存在一个「已注册但 `Attributes` 仍为 null」的窗口期，虽然官方代码不会在那个窗口里读它。

**第二步，理解它什么时候能被找到。** `Campaign` 初始化时执行 `this.AllSkills = MBObjectManager.Instance.GetObjectTypeList<SkillObject>()`（`Campaign.cs:1655`），把这个类型在对象管理器里的**全部实例**按注册顺序装进 `AllSkills`（`internal MBReadOnlyList<SkillObject>`）。对外入口是 [Skills](../../campaign/Skills) 这个静态扩展类，`public static MBReadOnlyList<SkillObject> All => Campaign.Current.AllSkills`。**这个列表是快照**：`GetObjectTypeList` 跑完就定型了，你在 `DefaultSkills` 构造之后才注册的自定义技能不会出现在里面。官方那 18 个能进去，正是因为 `DefaultSkills` 在 `Campaign` 建 `AllSkills` 之前就构造好了。

**第三步，理解读写的正确姿势。** 读：`hero.GetSkillValue(skill)`，实现是 `this._heroSkills.GetPropertyValue(skill)`，`_heroSkills` 为 null 时直接返回 0。写：`hero.SetSkillValue(skill, value)`，或 `hero.AddSkillXp(skill, xpAmount)` 走 `HeroDeveloper`。**技能数值的增删一律在 Hero 侧，`SkillObject` 自己永远只读。**

**第四步，理解两个「看起来能改其实不能」的成员。** `Attributes` 的 setter 是 `private`——外部没有任何途径改一个已注册技能的属性归类，因为唯一写它的地方是 `Initialize` 的第三行赋值。同理 `Name` / `Description` 来自 `PropertyObject`，也是只读 getter。要改一个内置技能的属性，必须在 `DefaultSkills` 构造**之前**抢先注册同 `StringId` 的实例，或者干脆注册一个新 id。

**最容易踩的坑是 `Initialize` 的重载歧义。** `PropertyObject` 有 `public void Initialize(TextObject name, TextObject description)`，`SkillObject` 有一个**三参数重载** `public SkillObject Initialize(TextObject name, TextObject description, CharacterAttribute[] attributes)`。这不是 override（父类是 `void` 无参不同，而且没标 `virtual`），只是同名不同签名的重载。在一个 `SkillObject` 类型的变量上调 `Initialize(a, b)` 会解析到**基类的两参版本**，只填 `Name` / `Description`，`Attributes` 保持 null 且**不返回 `this`**。三参版本才返回 `this`，是为了 `DefaultSkills.InitializeAll()` 里能写成链式表达。

再一个坑是 `HowToLearnSkillText` 的查找方式：`GameTexts.FindText("str_how_to_learn_skill", base.StringId)` —— 第二个参数是 `variation`（本地化变体），不是别的。它拿技能 id 当变体去查同一个 text id，因此**自定义技能必须自己在语言文件里补 `str_how_to_learn_skill` 的变体条目**，否则读到的是硬编码兜底 `new TextObject("{=Aj3zqQq4}Not available", null)`。另外这个 getter 把 `FindText` 调了两次（先判空再取值），一次列表渲染里读 N 个技能就是 2N 次查找——不是正确性问题，但自己缓存更稳妥。

顺带说一句 `TextObject` 的构造签名，避免误读：`public TextObject(string value, Dictionary<string, object> attributes = null)`。第二个参数**不是语言代码，是本地化属性字典**，官方全部传 `null`。真正区分语言靠 `value` 里的 `{=keyId}` 前缀。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Attributes` | `public CharacterAttribute[] Attributes { get; private set; }` | 这个技能归属的属性集合，决定升级时玩家加的点数如何分摊给 Vigor / Control / Endurance / Cunning / Social / Intelligence。**setter 是 `private`**，只有 `Initialize` 能写，外部无法改动已注册技能的属性归类。构造器阶段为 `null`，`Initialize` 之前读它会 NRE。 |
| `.ctor` | `public SkillObject(string stringId)` | 只把 `stringId` 交给 `base(stringId)`。**不做任何初始化**——`Name` / `Description` / `Attributes` 全是 null。这是有意的两段式构造：先注册占位，等 `DefaultSkills.InitializeAll()` 统一填。 |
| `Initialize` | `public SkillObject Initialize(TextObject name, TextObject description, CharacterAttribute[] attributes)` | 唯一的填充入口。内部调 `base.Initialize(name, description)`（那会置 `IsInitialized` 并写 `_name` / `_description`），再赋 `this.Attributes`，最后 `base.AfterInitialized()`。**返回 `this` 以便链式调用**。可以重复调用，没有一次性保护。 |
| `ToString` | `public override string ToString()` | 返回 `Name?.ToString() ?? StringId`。日志和调试输出走它。注意 `Name` 为 null 时它**回退到 `StringId`** 而不是抛异常——所以在一个刚 `Create` 出来还没 `Initialize` 的技能上打印，得到的是 `"OneHanded"`。 |
| `HowToLearnSkillText` | `public TextObject HowToLearnSkillText { get; }` | 「如何学会这个技能」的说明文本。走 `GameTexts.FindText("str_how_to_learn_skill", base.StringId)`，把**技能 id 当作变体名**。查不到时返回硬编码兜底 `{=Aj3zqQq4}Not available`。**自定义技能不补语言条目就永远读到兜底文案。** |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 存档引用收集钩子，实现只有一句 `base.AutoGeneratedInstanceCollectObjects(collectedObjects)`。它**不把 `Attributes` 加进 `collectedObjects`**——`Attributes` 里的 [CharacterAttribute](../CharacterAttribute) 引用不进存档，技能的定义随 `DefaultSkills` 重建。 |

继承自 [PropertyObject](../PropertyObject) 但同样关键的：`Name`（`TextObject`）、`Description`（`TextObject`）、`GetName()`（返回 `Name`，是 `MBObjectBase` 抽象成员的实现）、`StringId` / `Id`（来自 `MBObjectBase`）。

## 真实示例

读一个英雄的技能值，并用 `Attributes` 判断这个技能归到哪个属性下：

```csharp
SkillObject oneHanded = DefaultSkills.OneHanded;
Debug.Print("hero value = " + hero.GetSkillValue(oneHanded), 0);

if (oneHanded.Attributes != null)
{
    foreach (CharacterAttribute attribute in oneHanded.Attributes)
    {
        Debug.Print("belongs to " + attribute.Abbreviation.ToString(), 0);
    }
}
```

遍历全部内置技能（`Skills.All` 的顺序 = `DefaultSkills.RegisterAll()` 的注册顺序，先 OneHanded 后 Engineering）：

```csharp
foreach (SkillObject skill in Skills.All)
{
    Debug.Print(skill.StringId + " = " + skill.ToString(), 0);
}
```

注册一个自定义技能——**唯一正确的方式**，必须走 `RegisterPresumedObject` 再 `Initialize`：

```csharp
SkillObject mySkill = Game.Current.ObjectManager.RegisterPresumedObject<SkillObject>(
    new SkillObject("MyRopeCrafting"));
mySkill.Initialize(
    new TextObject("{=myRopeCrafting}Rope Crafting", null),
    new TextObject("{=myRopeCraftingDesc}Tying and splicing rope...", null),
    new CharacterAttribute[] { DefaultCharacterAttributes.Control });

// 注册完之后立刻能用它写数值
hero.SetSkillValue(mySkill, 120);
Debug.Print(mySkill.HowToLearnSkillText.ToString(), 0);
```

时序上这段代码必须落在 `DefaultSkills` 构造完成之后、`Campaign` 建 `AllSkills` 之前——也就是 `MBSubModuleBase.InitializeGameStarter` 或更早的 `OnGameStart` 之前。晚于 `Campaign` 初始化，`Skills.All` 里就没有它，但 `hero.SetSkillValue` 仍然可用（写进的是 `HeroDevSkill` 的属性集）。

用完记得释放：

```csharp
if (mySkill.HowToLearnSkillText != null)
{
    Debug.Print("hint = " + mySkill.HowToLearnSkillText.ToString(), 0);
}
```

## 风险与边界

- **`sealed`，不可继承。** `public sealed class SkillObject : PropertyObject`——写不了 `MySkillObject : SkillObject`。自定义技能只能是 `SkillObject` 本体，额外字段请外挂到静态字典、`XxxModel` 或关联的 `SkillEffect` 上。
- **没有 XML。** 它不走 `Deserialize`，不在任何 `ModuleData` XML 里定义。别去找技能 XML，找不到。创建的唯一合法途径是 `RegisterPresumedObject<SkillObject>(new SkillObject(id))` 后接 `Initialize`，这是 [DefaultSkills](../DefaultSkills) 的做法，也是 [DefaultItems](../../campaign/DefaultItems)、`DefaultTraits`、`DefaultPerks` 的统一做法。
- **`RegisterPresumedObject` 声明在 `TaleWorlds.ObjectSystem` 里，而该命名空间在 1.3.0 源码树中没有被反编译。** 本页依据的是 `DefaultSkills.cs:202` 的实际调用形状（`Game.Current.ObjectManager.RegisterPresumedObject<SkillObject>(new SkillObject(stringId))`），不是对 `MBObjectManager` 自身实现的推断。它是「代码里写死的、无需外部文件」的对象，与 XML 驱动的 `RegisterObject<T>` 形成对照。
- **`Attributes` 是数组引用，不是防御性拷贝。** getter 直接返回内部数组，调用方拿到的是同一块内存。官方代码只读，但外部 `hero.Attributes[0] = ...` 会静默改到全局所有英雄共享的那一个技能定义上。
- **`Attributes` 在 `Initialize` 之前是 null。** 构造器只设 `StringId`。任何在 `DefaultSkills.InitializeAll()` 之前读 `Attributes` 的代码都会 NRE，没有断言拦。
- **两参 / 三参 `Initialize` 重载。** 变量静态类型是 `SkillObject` 时，调 `Initialize(a, b)` 命中基类版本，**静默地不设 `Attributes`**。务必写满三个参数。
- **`HowToLearnSkillText` 依赖语言文件。** 需要 `str_how_to_learn_skill` 下以技能 `StringId` 为变体名的条目，否则读到 `{=Aj3zqQq4}Not available`。这个 getter 每次读都调两次 `GameTexts.FindText`，UI 里循环渲染 N 个技能就是 2N 次查找。
- **注册顺序决定 `Skills.All` 顺序。** `Campaign.AllSkills` 来自 `MBObjectManager.Instance.GetObjectTypeList<SkillObject>()`，是初始化时的一次性快照。**初始化 `Campaign` 之后新注册的技能不会出现在 `Skills.All` 里**，只在 `MBObjectManager` 的按 id 查找中可见。哪些界面按 `Skills.All` 顺序排技能菜单，那些界面就看不到你的技能。
- **不进存档。** `AutoGeneratedInstanceCollectObjects` 只调 `base`，`Attributes` 里的 `CharacterAttribute` 引用不被收集。存档存的是英雄技能属性集里对 `SkillObject` 的引用（按 id），读档时重新从 `DefaultSkills` 解析。改内置技能的属性归类不会破坏旧存档，但会让旧存档里的成长速率呈现新定义的分布。
- **`Game.Current` 依赖。** `DefaultSkills.Create` 走 `Game.Current.ObjectManager`，`DefaultSkills.Instance` 也是 `Game.Current.DefaultSkills`。游戏未启动时访问任何一个静态技能属性都会 NRE。
- **`Skills.All` 依赖 `Campaign.Current`。** `Skills.All` 的实现是 `Campaign.Current.AllSkills`，不在战役中（`Campaign.Current` 为 null）直接 NRE。纯战斗/编辑器场景请用 [DefaultSkills](../DefaultSkills) 的静态属性。

## 跨版本提示

`SkillObject.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 的 public/protected 表面**完全一致**：各 6 个成员（`Attributes`、`.ctor(string)`、`ToString()`、`Initialize` 三参、`HowToLearnSkillText`、protected `AutoGeneratedInstanceCollectObjects`），0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化。仍然 `sealed`，仍然没有 `Deserialize`。跨到 1.5.3 你的自定义技能注册代码不用改。

**变的是技能的数量与内容**，不是这个类的形状：`DefaultSkills.RegisterAll()` 里的硬编码列表随版本增长（1.3.0 是 18 个技能，从 OneHanded 到 Engineering）。另外 `Attributes` 数组的归类属于数据而非代码——升级后某个内置技能被挪到另一个属性下，纯粹是 `DefaultSkills.InitializeAll()` 里那段字面量变了。如果你的逻辑依赖「Bow 属于 Control」这类前提，那是在依赖数据，不是依赖 API。

## 依赖关系

- 基类：[PropertyObject](../PropertyObject) 提供 `Name` / `Description` / `GetName()` 与两参 `Initialize`；再往上是 `MBObjectBase`（`TaleWorlds.ObjectSystem`，不在 1.3.0 反编译范围内）
- 工厂：[DefaultSkills](../DefaultSkills) 是唯一的内置创建者，18 个技能全在它的 `RegisterAll()` / `InitializeAll()` 里写死
- 属性归类：[CharacterAttribute](../CharacterAttribute) 与 [DefaultCharacterAttributes](../DefaultCharacterAttributes) 定义 Vigor / Control / Endurance / Cunning / Social / Intelligence 六个属性
- 数值宿主：[Hero](../../campaign/Hero) 的 `GetSkillValue` / `SetSkillValue` / `AddSkillXp` 是技能数值的唯一读写口
- 全量列表：[Skills](../../campaign/Skills) 的 `All` → [Campaign](../../campaign/Campaign) 的 `internal AllSkills` → `MBObjectManager.GetObjectTypeList<SkillObject>()`
- 文本：[GameTexts](../GameTexts) 的 `FindText(id, variation)` 与 [TextObject](../../localization/TextObject) 的 `{=keyId}` 语法
- 桶首页：[core-extra API 分区](../)