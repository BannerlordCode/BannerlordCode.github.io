---
title: "SkillObject"
description: "技能定义对象：继承 PropertyObject 拿到 Name/Description，额外带 CharacterAttribute 列表与学习方式文本。"
---
# SkillObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class SkillObject : PropertyObject`
**Base:** `TaleWorlds.Core.PropertyObject`
**File:** `TaleWorlds.Core/SkillObject.cs`

## 概述

技能在游戏里是**静态数据**，不是存档对象：每个技能是全局唯一的一个 `SkillObject` 实例，由 `DefaultSkills` 这个静态集合持有（`DefaultSkills.Riding` 之类）。所以 `SkillObject` 虽然继承了 `PropertyObject` → `MBObjectBase`（因此有 `Id`、能被 `MBObjectManager` 寻址），但**它不参与玩家的技能进度存档**——进度存在 `Hero` / `Character` 一侧。

它相对基类只加了三样东西：一个 `CharacterAttribute[] Attributes` 数组（本技能点的属性，如力量/敏捷/技能点上限）、一个 `Initialize` 工厂方法（链式设置 name/description/attributes 后返回 `this`）、一个 `HowToLearnSkillText` 计算属性。另外覆写了 `ToString()`，优先返回本地化名字而不是 `StringId`。

`sealed`——不能继承。技能类型固定。

## 心智模型

技能对象是「读多写一次」的：游戏启动时由 `DefaultSkills` 收集 XML 里的每个 `<Skill>` 并调 `Initialize(...)` 灌满数据，之后整局只读。典型调用顺序：

1. `DefaultSkills.Initialize()` 阶段：`new SkillObject(stringId)` → `Initialize(name, description, attributes)` → 返回值忽略或存进 `DefaultSkills` 的静态属性。
2. 运行时：读 `skill.Name.ToString()` 显示、`skill.Attributes` 算属性成长、`skill.HowToLearnSkillText.ToString()` 显示学习途径。
3. 查某个技能对应的技能对象：走 `DefaultSkills` 的静态属性，**不要用 `MBObjectManager` 按 stringId 查**——虽然它技术上可寻址，但官方代码几乎都走 `DefaultSkills`。

常见误用：

- **误以为 `SkillObject` 会被存档。** 它是全局单例式数据；`DefaultSkills` 是 static。把技能数据挂到 `SkillObject` 实例上做 per-save 状态是错的，存档里不保存它。
- **`HowToLearnSkillText` 每次都 `GameTexts.FindText`** —— 它没有缓存。属性 getter 里做两次查找（判空一次、返回一次），在 UI 列表里循环调用会产生可观的开销。
- **`Initialize` 返回 `this` 只是为了链式**，它同时调 `base.AfterInitialized()`（`PropertyObject`/`MBObjectBase` 上的钩子）。**在 `AfterInitialized` 之后再调 `Initialize` 可能破坏已建立的状态。**
- **`ToString()` 在 `Name` 为 null 时返回 `StringId`**，但 `Name` 存在但内容为空串时返回空串——判空请用 `TextObject.IsNullOrEmpty`。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public SkillObject(string stringId)` | 唯一构造器，转发给 `PropertyObject(string stringId)`。**只设置标识，不设名称/描述/属性**——必须随后调 `Initialize` 才有意义。 |
| `Initialize` | `public SkillObject Initialize(TextObject name, TextObject description, CharacterAttribute[] attributes)` | 三合一工厂：调 `base.Initialize(name, description)` 写名称描述、设 `Attributes`、调 `base.AfterInitialized()`，最后 **返回 `this`** 供链式使用。**必须在使用前调用一次**，否则 `Name` / `Description` / `Attributes` 都是 null。数组引用直接存入，不做拷贝。 |
| `Attributes` | `public CharacterAttribute[] Attributes { get; private set; }` | 本技能提供的属性加成数组。`private set`，只能由 `Initialize` 写入。**可能是 null**（未调 `Initialize`），也可能元素为 null。使用前判空。 |
| `HowToLearnSkillText` | `public TextObject HowToLearnSkillText { get; }` | 计算属性，读 `GameTexts.FindText("str_how_to_learn_skill", base.StringId)`。找不到时返回硬编码兜底 `new TextObject("{=Aj3zqQq4}Not available", null)`。**每次访问都做两次 FindText，无缓存**。 |
| `ToString` | `public override string ToString()` | `Name` 非 null 时返回 `Name.ToString()`，否则回退 `base.StringId`。**`Name` 存在但为空串时返回空串而不是 StringId**——判空请用 `TextObject.IsNullOrEmpty(Name)`。 |

继承自 [PropertyObject](../PropertyObject)（未在本类重复列出）：`public TextObject Name`、`public TextObject Description`、`public override TextObject GetName()`、`public void Initialize(TextObject name, TextObject description)`。

## 真实示例

启动期构造一个技能（官方 `DefaultSkills` 的形状）：

```csharp
SkillObject mySkill = new SkillObject("my_skill_heavy_blade");
mySkill.Initialize(
    new TextObject("{=my_skill_heavy_blade}Heavy Blade"),
    new TextObject("{=my_skill_heavy_blade}Improves heavy blade damage."),
    new CharacterAttribute[] { Game.Current.DefaultCharacterAttributes.Vigor });
```

链式写法与显示：

```csharp
SkillObject skill = new SkillObject("my_skill_heavy_blade")
    .Initialize(
        new TextObject("{=my_skill_heavy_blade}Heavy Blade"),
        new TextObject("{=my_skill_heavy_blade}Improves heavy blade damage."),
        new CharacterAttribute[] { Game.Current.DefaultCharacterAttributes.Vigor });

string display = TextObject.IsNullOrEmpty(skill.Name) ? skill.StringId : skill.Name.ToString();
Debug.Print("skill: " + display, 0);
```

按需取用属性加成（`Attributes` 可能是 null）：

```csharp
SkillObject riding = DefaultSkills.Riding;
if (riding.Attributes != null)
{
    foreach (CharacterAttribute attribute in riding.Attributes)
    {
        if (attribute != null)
        {
            Debug.Print("grants " + attribute.StringId, 0);
        }
    }
}

string howToLearn = skill.HowToLearnSkillText.ToString();
Debug.Print(howToLearn, 0);
```

## 风险与边界

- **`Attributes` 可能是 null。** 没调 `Initialize` 就是 null。数组元素也可能是 null。直接遍历会 NRE。
- **`Initialize` 必须先于一切使用。** 它内部调 `base.AfterInitialized()`，这个钩子在 `PropertyObject` / `MBObjectBase` 体系里意味着「我已经完整了」。之后再改是未定义行为。
- **`Initialize` 不拷贝属性数组。** 传进去的 `CharacterAttribute[]` 是同一引用；外部改数组会同步改到技能对象上。
- **不参与存档。** 它是全局静态数据，技能进度在 `Hero` / `Character` 上。给 `SkillObject` 挂 per-save 状态不会被存下来。
- **`HowToLearnSkillText` 无缓存。** 每次 get 做两次 `GameTexts.FindText`。在列表绑定里对每行调它会产生明显开销，建议取出后 `CopyTextObject()` 缓存。
- **`ToString()` 不处理空串。** `Name` 是空 `TextObject` 时返回 `""`。判空用 `TextObject.IsNullOrEmpty`。
- **`sealed` 不可继承。** 技能的多态性靠"每个技能一个实例"而不是继承层级。
- **依赖 `Game.Current`。** `DefaultSkills` 与 `DefaultCharacterAttributes` 由 [Game](../Game) 的 `InitializeDefaultGameObjects()` 创建；早期访问为 null。
- **本地化 ID 是硬编码的。** `HowToLearnSkillText` 找的 key 是 `"str_how_to_learn_skill"` + `StringId`。技能 `StringId` 改了就找不到翻译，静默退到 "Not available"。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/SkillObject.cs` 逐行比对，**public 表面完全一致**：`.ctor(string stringId)`、`Initialize(TextObject, TextObject, CharacterAttribute[])`、`Attributes`、`HowToLearnSkillText`、`ToString()` 五项一字未改。`bannerlord-1.3.15` 里 `HowToLearnSkillText` 的兜底文本同样是 `{=Aj3zqQq4}Not available`。`bannerlord-1.4.5/` 本机未解出 C# 源码，未能核对。

## 依赖关系

- 基类：[PropertyObject](../PropertyObject) 提供 `Name` / `Description` / `GetName()` / `Initialize`
- 全局容器：`DefaultSkills` 持有全部技能实例（含 `DefaultSkills.Riding`），由 [Game](../Game) 的 `DefaultSkills` 属性暴露
- 引用者：[ItemObject](../ItemObject) 的 `RelevantSkill` 在物品是马匹时返回 `DefaultSkills.Riding`
- 显示路径：`Name` 与 `HowToLearnSkillText` 都是 `TextObject`，解析依赖 `GameTexts` 与本地化管线
- 桶首页：[core-extra API 分区](../)
