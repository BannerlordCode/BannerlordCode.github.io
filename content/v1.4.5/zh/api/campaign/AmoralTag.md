---
title: "AmoralTag"
description: "对话条件标签：Honor + Mercy 之和小于 0 才成立，用来在对话选项的 ChoiceTag 上筛选「无道德底线」的 NPC。"
---

# AmoralTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AmoralTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AmoralTag.cs`

## 概述

`AmoralTag` 是对话系统里的**一位一判定条件**：给定一个正在跟你说话的 [CharacterObject](../CharacterObject)，它回答「这个人道德上是否已经越界」。全部实现只有一行判据——`character.GetTraitLevel(DefaultTraits.Honor) + character.GetTraitLevel(DefaultTraits.Mercy) < 0`。

它不承担任何对话内容、不选台词、不改关系。真正消费它的是对话文本里的 `ChoiceTag`：游戏脚本会把某个台词变体标上「要求 AmoralTag 成立」，[ConversationManager](../ConversationManager) 在挑变体时逐条调用 `IsApplicableTo`，成立就给该变体累加 `Weight`，有一条 `ChoiceTag` 的判定与期望不符就直接返回 `-2147483648`，让这个变体彻底出局（`ConversationManager.FindMatchingScore`）。因此 `AmoralTag` 是**对话文本的可替换条件**，不是脚本 API。

## 心智模型

把它看成「XML/文本里的一个谓词名」，而不是一个能被 `new` 出来放在手里的对象。整条链路是：

`ConversationManager.InitializeTags()` → 反射遍历所有活动游戏程序集里 `ConversationTag` 的**子类** → 对每个类型 `Activator.CreateInstance(item)` → 以 `conversationTag.StringId` 为键塞进 `_tags` 字典。运行时真正调用的是 `ConversationManager.IsTagApplicable("AmoralTag", character)`，它查字典后转发到 `IsApplicableTo`。三个硬性推论：

1. **你不该手动 `new AmoralTag()`。** 全树 11,000+ 个 `.cs` 里 `new AmoralTag(` 命中 0，实例是 `InitializeTags` 用**无参构造**反射建的。你自己 new 出来的实例不在 `_tags` 里，`IsTagApplicable` 根本不会问它。
2. **派生标签必须有 public 无参构造。** 反射 `Activator.CreateInstance` 找不到无参构造会抛 `MissingMethodException`，且发生在游戏启动的 `InitializeTags` 里，不是第一次对话时——是启动期崩，不是运行期降级。官方模板基类只声明了 `StringId` 与 `IsApplicableTo` 两个抽象成员，没有第三个要你实现的东西。
3. **`StringId` 与 XML/文本里写的名字必须逐字一致。** `StringId` 返回 `"AmoralTag"`，`const string Id` 也是 `"AmoralTag"`；`IsTagApplicable` 在查不到键时会走 `Debug.FailedAssert("Asking for a nonexistent tag: " + tagId, ...)` 并**返回 false**。也就是说打错名字不会抛异常，代价是那条 `ChoiceTag` 永远判不成立、那个台词变体被静默剪掉。

判据本身还有一层细节值得记住：`GetTraitLevel` 来自 [CharacterObject](../CharacterObject)（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterObject.cs:773`），内部先判 `IsHero`，是英雄就转发 `HeroObject.GetTraitLevel(trait)`，否则读普通角色的 `_characterTraits`。所以对普通 NPC 也成立——**「无道德」的商人、平民也吃这个标签**，不限于贵族。阈值是严格小于 0：Honor 与 Mercy 一正一负、绝对值相等时刚好等于 0，**不算 Amoral**。想放宽到「<= 0」必须自己派生标签，`const Id` 不会帮你。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public const string Id = "AmoralTag"` | 给 C# 侧引用用的常量字符串，值与 `StringId` 相同。引擎自己**不读**它——`_tags` 的键来自 `StringId`。写对话 XML 或用 `ConversationData` 时引用的是这个字面量，改 `StringId` 而忘了改 `Id` 会让两边不一致。 |
| `StringId` | `public override string StringId => "AmoralTag"` | 反射注册进 `_tags` 字典时用的键，也是对话文本 `ChoiceTag.tag_name` 里要写的名字。基类 `ToString()` 直接返回它，所以调试打印标签时看到的就是这个字符串。 |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | 唯一的行为。取 Honor 与 Mercy 两个 [TraitObject](../DefaultTraits) 的等级求和，**严格小于 0** 才返回 true。无缓存、无副作用，每次对话选变体时对每个候选角色重新算一次。 |

## 真实示例

查询一个角色当前是否满足「无道德底线」这个对话条件：

```csharp
CharacterObject speaker = Hero.OneToOneConversationHero.CharacterObject;
bool amoral = Campaign.Current.ConversationManager.IsTagApplicable("AmoralTag", speaker);
if (amoral)
{
    Debug.Print(speaker.Name + " has Honor+Mercy below zero", 0);
}
```

想知道「差多少」，就直接把判据自己再算一遍——不要试图从 `IsApplicableTo` 里拿数值，它只给 bool：

```csharp
CharacterObject npc = Hero.MainHero.CharacterObject;
int honor = npc.GetTraitLevel(DefaultTraits.Honor);
int mercy = npc.GetTraitLevel(DefaultTraits.Mercy);
int moralSum = honor + mercy;
Debug.Print("honor=" + honor + " mercy=" + mercy + " sum=" + moralSum, 0);
```

派生一个自己的标签时，用 `const Id` 保持「常量名与字符串值同形」这个官方约定，并沿用基类的无参构造：

```csharp
public class RuthlessTag : ConversationTag
{
    public const string Id = "RuthlessTag";

    public override string StringId => "RuthlessTag";

    public override bool IsApplicableTo(CharacterObject character)
    {
        return character.GetTraitLevel(DefaultTraits.Mercy) <= -3;
    }
}
```

## 风险与边界

- **不是可 `new` 的运行时对象。** 没有任何公开构造以外的注册途径；`InitializeTags` 一次性建好全部实例并缓存。战斗/对话中途想热插一个标签做不到。
- **拼错名字是静默失败。** `IsTagApplicable` 对不存在的 tag 只 `FailedAssert` 然后返回 false，台词变体被无声剪掉，不是崩溃。排障时先确认 `_tags` 里有这个 `StringId`。
- **tag 名在程序集内必须唯一。** `_tags.Add(conversationTag.StringId, conversationTag)` 是 `Add` 不是索引赋值；两个类返回同一个 `StringId` 会在启动期抛 `ArgumentException`，且后加载的模块决定谁先注册。
- **不区分性别 / 身份 / 生死。** 判据里没有 `IsHero`、没有 `IsFemale`。想区分得自己加分支。
- **AI 角色也吃这个标签。** `IsApplicableTo` 对 AI 控制的主角同样返回判定值，`ConversationManager` 一视同仁。
- **每个 ChoiceTag 都会重算。** `FindMatchingScore` 对每个 `ChoiceTag` 调一次 `IsTagApplicable`，判据越贵越要留意——本例只是两次 trait 读取，可以忽略；如果你派生出一个要遍历世界的标签，那才是真成本。
- **不受 CampaignOptions 影响。** 无生命死亡循环之类的开关不影响它。

## 怎么用

### 怎么拿到它

不要 `new`。实例是 `ConversationManager.InitializeTags()`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs:1032`）用 `Activator.CreateInstance(item)` 反射建的（`:1063`），键取自 `StringId`，写进 `_tags`（`:1064`）。**这一步只发生在战役初始化，`战斗/对话中途热插一个标签做不到。**

你要「拿到」的是 `AmoralTag.Id`（`AmoralTag.cs:7`，值 `"AmoralTag"`），但**引擎自己从不读这个 `const`**——它只是给 C# 侧引用用的。判据的两个 [TraitObject](../DefaultTraits) 来自 `DefaultTraits.Mercy`（`DefaultTraits.cs:73`）与 `DefaultTraits.Honor`（`:77`），它们是 `Instance._traitMercy` / `_traitHonor` 的属性转发，实例在 `:130`/`:132` 一次性 `Create` 出来，**同一局里是同一批对象引用，可以安全地用 `==` 比较。**

运行时入口是 `Campaign.Current.ConversationManager.IsTagApplicable("AmoralTag", character)`（`ConversationManager.cs:1094`）。

### 典型用法

这标签的真正位置在对话数据的 `ChoiceTag` 上，而不是 C# 调用。打分在 `FindMatchingScore`（`:1013`）：非 `"DefaultTag"` 的每一条都做 `IsTagApplicable(choiceTag.TagName, character) == choiceTag.IsTagReversed`（`:1021`），**成立就把这条变体的分数置为 `-2.1474836E+09f` 直接返回**，一条出局就不再累加别的；全部通过才按 `choiceTag.Weight` 相加（`:1025`-`:1026`）。

所以「要求对方无道德底线」和「要求对方有道德底线」是同一套机制的两面——后者把 `IsTagReversed` 打开。配台词之前先把判据的分界线量出来：

```csharp
public static class AmoralTagMarginProbe
{
    public static void Report(CharacterObject npc)
    {
        int mercy = npc.GetTraitLevel(DefaultTraits.Mercy);
        int honor = npc.GetTraitLevel(DefaultTraits.Honor);
        int sum = mercy + honor;
        Debug.Print(npc.Name + " mercy=" + mercy + " honor=" + honor + " sum=" + sum, 0);
        bool amoral = Campaign.Current.ConversationManager.IsTagApplicable(AmoralTag.Id, npc);
        Debug.Print("amoral=" + amoral + " (strictly sum<0 required)", 0);
    }
}
```

`GetTraitLevel`（`CharacterObject.cs:773`）内部先判 `IsHero`：是英雄就转发 `HeroObject.GetTraitLevel(trait)`（`:777`），否则读普通角色的 `_characterTraits`（`:779`）。**两条路都返回 `int`，所以标签对非英雄 NPC 一样成立**——这也是为什么「无道德」的商人与平民也会吃到这条标签。

阈值是**严格小于 0**：Honor 与 Mercy 一正一负、绝对值相等时刚好等于 0，不算 Amoral。想放宽成 `<= 0` 或改判 Mercy 单项，只能派生一个新标签——`const Id` 不会替你调。

### 最容易踩的坑

**不是可 `new` 的运行时对象。** 没有任何公开构造以外的注册途径；`InitializeTags` 一次性建好全部实例并缓存。战斗/对话中途想热插一个标签做不到。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AmoralTag.cs` 是 15 行、4 个成员（1 个 `const`、1 个 override 属性、1 个 override 方法），判据单行、没有任何条件编译分支。1.4.6 与 1.3.15 同名文件的公开表面与之逐成员一致，未见新增或移除。

## 依赖关系

- 基类：[ConversationTag](../ConversationTag) 只声明 `StringId` / `IsApplicableTo` 两个抽象成员，并让 `ToString()` 返回 `StringId`
- 注册者：[ConversationManager](../ConversationManager) 的 `InitializeTags()` 反射建实例、`IsTagApplicable(string, CharacterObject)` 查表转发；同文件 `FindMatchingScore` 决定台词变体
- 被查对象：[CharacterObject](../CharacterObject) 的 `GetTraitLevel(TraitObject)`（`CharacterObject.cs:773`）是英雄→`HeroObject`、普通人→`_characterTraits` 的双路读取
- 判据常量：[DefaultTraits](../DefaultTraits) 提供 `Honor` 与 `Mercy` 两个 [TraitObject](../TraitObject) 实例
- 同族标签：[AlliedLordTag](../AlliedLordTag)、[AnyNotableTypeTag](../AnyNotableTypeTag) 是同一命名空间里同构的另外两个标签
- 对话注册表：[ConversationManager](../ConversationManager) 所在的 `TaleWorlds.CampaignSystem.Conversation` 命名空间是全部对话标签与台词数据的宿主
