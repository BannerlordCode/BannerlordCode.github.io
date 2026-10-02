---
title: "SkillObject"
description: "Bannerlord 中“技能”的静态定义对象：单手、骑术、交易等 18 个内置技能通过 DefaultSkills 注册进 ObjectManager，仅持有名称、描述、所属属性与学习提示；角色的实际技能等级由 Hero/HeroDeveloper 与 SkillLevelingManager 另行维护，本类本身不保存任何个人进度。"
---
# SkillObject

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public sealed class SkillObject : PropertyObject`  
**Base:** `PropertyObject`（`→ MBObjectBase`）  
**File:** `TaleWorlds.Core/SkillObject.cs`

## 概述

`SkillObject` 是**技能目录里的一条“定义”**，而不是某个角色当前的技能等级。游戏启动时 `DefaultSkills` 把 18 个内置技能（单手武器、双手武器、骑术、贸易、领导、工程……）逐个 `new` 出来、注册进 `MBObjectManager`、再 `Initialize` 上名称与描述。从此之后，这 18 个实例就是全局唯一的“技能身份证”。

真正的“某人某技能多少级、攒了多少经验”并不在这个类里：那些数据挂在 `Hero`/`CharacterObject` 上（经 `HeroDeveloper` 维护），升级逻辑由 `SkillLevelingManager` 这个模型驱动。所以 `SkillObject` 的职责是**被引用**——当你要查询/修改一个英雄的技能、要遍历所有技能、或要在 UI 上展示“这个技能练什么属性、怎么学”时，你拿的就是它。

## 心智模型

把 `SkillObject` 想成**“技能卡片”的模板**：

- 它和英雄是一对多的关系——成千上万个 `Hero` 都引用同一个 `DefaultSkills.OneHanded` 实例，但各自保存自己的等级。
- 它是 `MBObjectBase` 派生对象，**靠 `StringId` 在存档里被引用**。你永远不要自己 `new SkillObject("OneHanded")` 来当“单手武器”用——那样得到的是另一个未被注册、无法参与存档解析的对象。要拿单手武器，用 `DefaultSkills.OneHanded` 或 `MBObjectManager.Instance.GetObject<SkillObject>("OneHanded")`。
- 它是只读数据：名称、描述、`Attributes`、`HowToLearnSkillText` 在游戏初始化后就固定了。`Initialize` 由引擎在加载期调用，模组通常不应再对已注册技能调用它。
- **何时用**：需要一个“技能”的引用去读它的属性、遍历全部技能、或传给 `Hero.GetSkillValue` / `Hero.AddSkillXp` / `SkillLevelingManager` 时。
- **何时不要用**：想给某个角色加技能经验或改等级时——直接改 `SkillObject` 毫无效果。正确入口是 `Hero.MainHero.AddSkillXp(skill, xp)`（内部转交 `HeroDeveloper`），升级判定走 `SkillLevelingManager` 的 `On*` 事件。
- **依赖**：上游是 `PropertyObject`/`MBObjectBase`（身份与文本）、`CharacterAttribute`/`DefaultCharacterAttributes`（它贡献的属性）、`GameTexts`（学习提示文本）、`MBObjectManager`（注册与检索）；下游是 `DefaultSkills`（18 个实例）、`Hero`/`HeroDeveloper`（个人等级）、`CharacterObject`（模板等级）、`Campaign.Current.AllSkills`（全集）、`SkillLevelingManager`（升级）。
- **失败模式**：在 `Campaign` 尚未建立时访问 `DefaultSkills.*` 或 `Campaign.Current.AllSkills` 会得到 `null`；自定义技能若未先 `MBObjectManager` 注册就参与存档，重载后会变成无法解析的悬挂引用。

## 依赖图

**上游（定义与注册）**

- [PropertyObject](../../core-extra/PropertyObject/) — 基类，提供 `Name` / `Description` / `StringId`
- [CharacterAttribute](../../core-extra/CharacterAttribute/) — `Attributes` 的元素类型
- [DefaultCharacterAttributes](../../core-extra/DefaultCharacterAttributes/) — 六个内置属性（Vigor / Control / Endurance / Cunning / Social / Intelligence）
- [MBObjectManager](../../campaign-ext/MBObjectManager/) — 技能的注册与按 `StringId` 检索

**下游（引用 SkillObject 的子系统）**

- [DefaultSkills](../../core-extra/DefaultSkills/) — 18 个内置 `SkillObject` 实例的工厂
- [Hero](../../campaign/Hero/) — `GetSkillValue` / `AddSkillXp` 接收 `SkillObject`
- [HeroDeveloper](../../campaign-ext/HeroDeveloper/) — 英雄技能等级与经验的真实存储
- [CharacterObject](../../campaign/CharacterObject/) — `GetSkillValue` 的模板级实现
- [SkillLevelingManager](../../campaign-ext/SkillLevelingManager/) — 升级模型，消费各 `SkillObject`
- [Campaign](../../campaign/Campaign/) — `AllSkills` 即全部已注册技能

## 风险段

- **不要手工 `new SkillObject` 当内置技能用**：内置技能由 `DefaultSkills` 在加载期注册，引擎与存档靠 `StringId` 解析引用。复制一个同名实例不会等于已注册实例，参与存档序列化后重载会出现引用错位甚至读档失败。
- **初始化期之外调用 `Initialize` 会覆盖定义**：`Initialize` 设置名称/描述/属性并触发 `AfterInitialized`。对已注册技能再次调用会改写全局共享的定义，影响所有引用它的英雄。新增自定义技能时，必须先 `MBObjectManager.Instance.RegisterPresumedObject(new SkillObject(id))` 再 `Initialize`。
- **`DefaultSkills.*` / `Campaign.Current.AllSkills` 在游戏未就绪时为 `null`**：在 `MBSubModuleBase` 构造函数或 `OnSubModuleLoad` 里（战役尚未开始）访问会空引用崩溃。要拿技能定义在 `OnGameStart` / Behavior 里取。
- **`HowToLearnSkillText` 依赖本地化键**：它读取 `str_how_to_learn_skill` + 技能 `StringId` 的本地化文本；缺失时返回内容为 `"Not available"` 的 `TextObject`，不是 `null`——UI 上直接显示即可，但不要把它当权威数据。
- **`Attributes` 不是存档点**：属性数组在 `Initialize` 时一次性设定，并不单独序列化；运行时改它不会持久化。

## 成员说明

### 身份与文本

#### `public string StringId`（继承自 `MBObjectBase`）
技能的稳定字符串 ID，如 `"OneHanded"`、`"Riding"`。`MBObjectManager` 与存档都靠它定位实例。  
**副作用**：无。**何时用**：作为检索键（`GetObject<SkillObject>(stringId)`）或在日志/调试里标识技能。

#### `public TextObject Name`（继承自 `PropertyObject`）
技能的本地化显示名（如“单手武器”）。由 `Initialize` 写入。  
**副作用**：无。**何时用**：UI 展示、拼消息。

#### `public TextObject Description`（继承自 `PropertyObject`）
技能的长描述文本。由 `Initialize` 写入。

#### `public override string ToString()`
直接返回 `Name?.ToString() ?? StringId`——没有本地化名时退化为 ID。  
**副作用**：无。**何时用**：调试输出、日志。

#### `public TextObject HowToLearnSkillText`
按 `StringId` 查 `GameTexts` 的 `str_how_to_learn_skill` 变体；找不到则返回内容为 `"Not available"` 的 `TextObject`。  
**副作用**：无。**何时用**：在技能界面显示“如何提升该技能”的提示。

### 属性关联

#### `public CharacterAttribute[] Attributes { get; private set; }`
该技能**贡献于哪些角色属性**。绝大多数内置技能只映射到 1 个属性（如 `OneHanded → Vigor`、`Trade → Social`），但类型本身是数组，自定义技能可挂多个。由 `Initialize` 设定，之后不可变。  
**副作用**：无。**何时用**：判断“练这个技能会涨哪个属性”，或按属性归类技能（见下方示例 3）。

### 初始化（引擎内部为主）

#### `public SkillObject(string stringId)` / `public SkillObject Initialize(TextObject name, TextObject description, CharacterAttribute[] attributes)`
构造并填充一条技能定义；`Initialize` 会写入 `Name`/`Description`/`Attributes` 并触发 `AfterInitialized()`，最后返回 `this` 便于链式调用。引擎在 `DefaultSkills.RegisterAll` → `InitializeAll` 中对 18 个内置技能调用。  
**副作用**：设定全局共享的定义数据；对已注册技能重复调用会覆盖。  
**何时用**：仅当你要新增**自定义**技能——先经 `MBObjectManager` 注册，再调用 `Initialize`，且务必在游戏加载阶段完成。

## 真实示例

### 示例 1：拿到内置技能定义并读取它贡献的属性

```csharp
// 通过 DefaultSkills 取“单手武器”技能定义（等价于 MBObjectManager 中 StringId="OneHanded" 的实例）
SkillObject oneHanded = DefaultSkills.OneHanded;

// 它贡献的属性（内置技能通常是 1 个）：活力 Vigor
foreach (CharacterAttribute attribute in oneHanded.Attributes)
{
    InformationManager.DisplayMessage(new InformationMessage($"{oneHanded.Name} 贡献于属性 {attribute.Name}"));
}

// 读取“如何学习”提示（缺失本地化时回退为 "Not available"，不会是 null）
TextObject howToLearn = oneHanded.HowToLearnSkillText;
```

### 示例 2：给主角的技能加经验并查询等级

```csharp
// 在战役 Behavior / 对话 / 调试指令中：给主角“交易”技能加 1500 经验
SkillObject trade = DefaultSkills.Trade;
Hero.MainHero.AddSkillXp(trade, 1500f);

// 查询当前等级（内部转交 HeroDeveloper）
int tradeLevel = Hero.MainHero.GetSkillValue(trade);
```

> 真正的升级/降级判定由 `SkillLevelingManager` 在收到 `On*` 事件时完成，不要试图直接改 `SkillObject` 来提升等级。

### 示例 3：按属性遍历全部技能（通过 `MBObjectManager` 取全集）

```csharp
// Campaign.Current.AllSkills 即 MBObjectManager 中全部已注册 SkillObject
foreach (SkillObject skill in Campaign.Current.AllSkills)
{
    // 找出所有贡献于“社交”属性的技能
    if (skill.Attributes.Contains(DefaultCharacterAttributes.Social))
    {
        InformationManager.DisplayMessage(new InformationMessage(skill.Name.ToString()));
    }
}

// 也可按 StringId 精确取回已注册实例
SkillObject riding = MBObjectManager.Instance.GetObject<SkillObject>("Riding");
```

## 跨版本提示

- **1.3.0 → 1.4.5**：`SkillObject` 的公开成员（`Attributes`、`HowToLearnSkillText`、`Initialize`、`ToString` 及继承的 `Name`/`StringId`/`Description`）保持稳定，无破坏性改动。
- 一些旧资料或自动生成摘要里提到的 `SkillType`、`Characteristic`、`MinValue`/`MaxValue`、`IsPartySkill` **并不是 `SkillObject` 的成员**——本类只持有“定义级”数据（名称、描述、属性、学习提示），个人等级与战斗/队伍标签分别由 `Hero`/`HeroDeveloper` 与 perk/技能效果系统维护。若你看到这些名字，请核对 `Hero` 或 `SkillEffect` 相关页面，而非在 `SkillObject` 上寻找。

## 参见

- [DefaultSkills](../../core-extra/DefaultSkills/) — 18 个内置技能实例
- [CharacterAttribute](../../core-extra/CharacterAttribute/) — 技能贡献的属性类型
- [PropertyObject](../../core-extra/PropertyObject/) — 基类与文本字段
- [Hero](../../campaign/Hero/) — 个人技能等级入口（`GetSkillValue` / `AddSkillXp`）
- [HeroDeveloper](../../campaign-ext/HeroDeveloper/) — 技能等级与经验的真实存储
- [SkillLevelingManager](../../campaign-ext/SkillLevelingManager/) — 升级模型
- [Campaign](../../campaign/Campaign/) — `AllSkills` 全集
