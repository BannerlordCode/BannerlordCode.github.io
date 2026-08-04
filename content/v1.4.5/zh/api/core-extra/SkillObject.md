---
title: "SkillObject：技能定义与属性关联"
description: "v1.4.5 中注册技能的定义对象；说明技能 ID、属性关联、文本和角色技能数值之间的边界。"
---
# SkillObject

## 元数据

- **Namespace:** `TaleWorlds.Core`
- **Module:** `TaleWorlds.Core`
- **Type:** `public sealed class SkillObject`
- **Base:** `PropertyObject`
- **源码:** `bin/TaleWorlds.Core/TaleWorlds.Core/SkillObject.cs`

## 一句话职责

`SkillObject` 是一个已注册的技能定义：它回答“这项技能是什么、叫什么、由哪些 `CharacterAttribute` 关联”，不保存某个 `Hero` 当前有多少技能点。

## 心智模型

它位于 Core 的对象定义层，先于 Campaign 中的角色运行数据。游戏启动或模块初始化时，默认技能通过 `DefaultSkills` 创建并注册；`Skills.All` 提供已注册定义的集合。`CharacterObject`、角色创建和同伴系统用同一个 `SkillObject` 作为字典键或模板引用，真正的等级、经验和加点仍属于角色的技能数据。

因此，模组通常读取现有定义，再用它去查询角色的技能值或识别物品的 `RelevantSkill`。不要把 `SkillObject.Initialize` 当成运行时改 Hero 技能的入口，也不要为每个 Hero 创建一份定义对象。重复 `StringId`、在注册阶段之后擅自初始化或把未注册对象传给需要全局定义的系统，会造成查找失败、重复 ID 或存档/模板引用不一致。

## 何时用，何时不用

### 适合使用

- 在 `Skills.All` 中查找某项技能并显示其名称、说明或关联属性。
- 读取 `CharacterObject`、装备或开发系统中已有的 `SkillObject` 引用。
- 在模块初始化阶段注册一个确实属于模块内容的新技能定义，并为它提供唯一稳定的 `StringId`。

### 不适合使用

- 不要用 `SkillObject` 代替 Hero 的技能等级、经验或 Perk 状态；这些属于角色运行数据和开发系统。
- 不要在战役 tick 中重复调用 `Initialize`，也不要修改已注册技能的 `Attributes` 来“临时”改变角色属性。
- 不要用字符串猜测技能对象。优先使用 `Skills.All`、默认技能定义或调用点传入的引用；字符串查找应与注册顺序和 ID 契约一致。

## 依赖关系

```text
DefaultSkills / 模块注册
        ↓
MBObjectManager → SkillObject → Skills.All
        ↓                         ↓
CharacterObject / ItemObject   Hero 的技能数据与 CharacterDevelopment
        ↓
CharacterCreationCampaignBehavior / CompanionsCampaignBehavior
```

- 上游：[`PropertyObject`](../PropertyObject)、`TextObject` 和对象注册流程。`StringId` 来自基类，不能随意复用。
- 同级：[`CharacterAttribute`](../CharacterAttribute) 和 [`DefaultSkills`](../DefaultSkills)；`Skills.All` 是运行时集合入口，不在本页把它误写成另一种定义对象。
- 下游：[`CharacterObject`](../../campaign/CharacterObject) 把技能定义放进角色/兵种模板；Hero 的运行时技能系统以同一引用保存等级和经验。
- 相关内容：物品可通过 `ItemObject.RelevantSkill` 指向技能定义；物品本身仍是 [`ItemObject`](../ItemObject)，不是技能对象。

## 关键成员与时机

| 成员 | 用途 | 时机与副作用 |
|---|---|---|
| `Attributes` | 返回该技能关联的 `CharacterAttribute[]`。例如力量、控制或智力会影响技能所属分组。 | 只有完成 `Initialize(name, description, attributes)` 后才具有模块定义的意义。读取数组时不要把它当成 Hero 当前属性值。 |
| `HowToLearnSkillText` | 按 `StringId` 查找 `str_how_to_learn_skill` 文本。找不到时返回 “Not available”。 | 依赖 `GameTexts` 已加载；文本不存在不是技能对象损坏，而是本地化资源缺失。每次访问都可能触发文本查找。 |
| `StringId`、`Name`、`Description` | 继承自 `PropertyObject` 的稳定识别和显示文本。 | 注册 ID 用于跨系统引用；显示文本应走 `TextObject`，不要把本地化字符串硬编码到运行时状态。 |
| `Initialize(TextObject, TextObject, CharacterAttribute[])` | 在定义阶段设置名称、说明和属性数组，然后调用 `AfterInitialized`。 | 这是构造/注册流程的一部分，不是调整角色进度的 API。重复调用会改变共享定义，影响所有引用它的模板。 |
| `ToString()` | 优先返回 `Name` 的文本，否则返回 `StringId`。 | 适合日志和诊断，不应作为稳定存档键；显示名会随语言改变。 |

自动收集方法属于 SaveSystem 反射/生成实现，不是模组的业务入口。需要保存角色技能时，保存拥有该技能值的角色或行为状态，并遵守 [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner) 与 [`CampaignBehaviorBase`](../../campaign/CampaignBehaviorBase) 的契约。

## 真实获取路径

### 从默认技能集合读取定义

```csharp
using TaleWorlds.Core;

SkillObject riding = Skills.Riding;
foreach (SkillObject skill in Skills.All)
{
    if (skill == riding)
    {
        string stableId = skill.StringId;
        TextObject label = skill.Name;
        break;
    }
}
```

`Skills.Riding` 和 `Skills.All` 是游戏默认技能注册后的真实入口。模组自己的 UI 可以读取 `Name` 和 `Description`，但查询 Hero 等级时还要回到角色技能数据，而不是从 `SkillObject` 推断。

### 从真实调用对象读取

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>("sword_two_handed");
SkillObject relevantSkill = item.RelevantSkill;
if (relevantSkill != null)
{
    TextObject skillName = relevantSkill.Name;
}
```

物品的 `RelevantSkill` 只说明使用该物品关联哪项技能；武器伤害和 Hero 技能值仍由对应的物品/角色系统计算。

## 风险与边界

- **注册时机：** `SkillObject` 依赖对象系统和文本资源的初始化。过早读取 `Skills.All`、过晚修改已注册定义，都可能得到空集合或改变全局共享状态。
- **唯一 ID：** `StringId` 同时参与对象查找、模板引用和跨存档识别。不要复用原版 ID，也不要在每次启动生成随机 ID。
- **定义与数值分离：** `Attributes` 是技能的分类关联，不是角色的当前属性；`SkillObject` 也不携带经验、等级或 Perk。改错层会让 UI 显示与战役计算失配。
- **本地化：** `HowToLearnSkillText` 依赖 `GameTexts.FindText`。缺失文本会返回默认文本，调用方应接受这一结果，不要把它当成空引用一定会被填充。
- **共享引用：** `CharacterObject`、物品和多个角色可共同引用同一个定义对象。不要在战役过程中修改 `Attributes` 或名称来影响单个角色。

## 版本说明

本页以 v1.4.5 `TaleWorlds.Core` 源码为准。v1.3.15 的技能集合和默认定义可能有增删；跨版本兼容代码应按 `StringId` 检查可用定义，不应假定所有版本都存在同一技能或同一属性关联。

## 导航

- [↑ Core Extra 父级](../)
- [↔ ItemObject](../ItemObject)
- [↔ Equipment](../Equipment)
- [↔ Banner](../Banner)
- [↔ Campaign：CharacterObject](../../campaign/CharacterObject)
- [相关：SaveableTypeDefiner](../../save-system/SaveableTypeDefiner)
