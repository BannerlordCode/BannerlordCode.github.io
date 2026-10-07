---
title: "AlliedLordTag"
description: "对话条件标签：对方是与玩家同一 MapFaction 且未被消灭的贵族时成立，用来筛选「盟友领主」这一类对话变体。"
---

# AlliedLordTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AlliedLordTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AlliedLordTag.cs`

## 概述

`AlliedLordTag` 是对话系统里的一位一判定：**眼前这个人是不是我的盟友方贵族**。名字叫 "AlliedLord"，但 `Id` 与 `StringId` 都是 `"PlayerIsAlliedTag"`——**类名与注册名不同**，这一点在写对话 XML 时最容易踩。

判据分两层，缺一不可：先 `character.IsHero`，再 `DiplomacyHelper.IsSameFactionAndNotEliminated(character.HeroObject.MapFaction, Hero.MainHero.MapFaction)`。也就是说它比较的是 `MapFaction`（**当前地图上的实际阵营**，含玩家中途叛离、附庸、被吞并后的变化），不是 `Clan`、不是 `Kingdom`，也不看领主自己的 [Clan](../Clan) 是 vassal 还是 ruler。

## 心智模型

和同命名空间其它标签一样，它是**对话文本里的谓词名**，不是随手 new 的对象。`ConversationManager.InitializeTags()`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs:1032`）反射遍历所有活动游戏程序集里 `ConversationTag` 的子类，对每个类型 `Activator.CreateInstance(item)` 建实例，以 `StringId` 为键存入 `_tags`。真正调用点是 `ConversationManager.IsTagApplicable(string tagId, CharacterObject character)`：查字典→转发 `IsApplicableTo`；查不到键就 `Debug.FailedAssert("Asking for a nonexistent tag: " + tagId, ...)` 并返回 false。

四个必须记住的点：

1. **你写进对话文本的是 `"PlayerIsAlliedTag"`，不是 `"AlliedLordTag"`。** `StringId` 才是注册键；`public const string Id = "PlayerIsAlliedTag"` 与它一致。用类名去 `IsTagApplicable` 会静默返回 false，台词变体被无声剪掉。
2. **必须是英雄。** `character.IsHero` 为假直接返回 false。带队的 [MobileParty](../MobileParty) 里的普通士兵永远不会吃这个标签，即便他和玩家同阵营。
3. **同阵营 ≠ 同王国的封臣。** 判据是 `MapFaction` 相等，**不检查领主是否 `Clan` 里的贵族**、是否是玩家王国的封臣。所以玩家的**直属封臣**和**自己王国内非封臣的领主**都可能返回 true；而玩家的**佣兵团领主**在 `Hero.MainHero.MapFaction` 仍是玩家本族时同样返回 true（除非玩家已雇佣）。名字里的 "Lord" 只是约定俗成的叫法，实现里没有任何 Lord 判定。
4. **"未被消灭"是硬条件。** `DiplomacyHelper.IsSameFactionAndNotEliminated`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs:41`）在 `faction1 != null && faction2 != null && faction1 == faction2 && !faction1.IsEliminated` 时才继续，最后再查一次 `faction2.IsEliminated`。玩家阵营被灭国后，即使这个人还在地图上，标签立刻失效。

**tag 名在程序集内必须唯一**：`_tags.Add(conversationTag.StringId, conversationTag)` 用的是 `Add`。你若派生一个标签却沿用 `"PlayerIsAlliedTag"`，会在启动期抛 `ArgumentException`，不是运行期降级。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public const string Id = "PlayerIsAlliedTag"` | C# 侧引用的常量。**注意它等于 `StringId` 而不是类名**。引擎不读这个常量——`_tags` 的键来自 `StringId`——但保持两者同形是这个族的官方约定，抄写时不要自作聪明改成 `"AlliedLordTag"`。 |
| `StringId` | `public override string StringId => "PlayerIsAlliedTag"` | 反射注册进 `_tags` 的键，也是对话文本 `ChoiceTag.tag_name` 与 `IsTagApplicable` 的入参。基类 `ToString()` 返回它，调试打印时看到的就是这个字符串。 |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | 唯一的行为。先挡 `!character.IsHero`，再比 `character.HeroObject.MapFaction` 与 `Hero.MainHero.MapFaction` 是否同阵营且都未被消灭。无缓存、无副作用，每次对话选变体时对每个候选角色重算。 |

## 真实示例

查询当前对话对象是不是盟友方贵族：

```csharp
CharacterObject speaker = Hero.OneToOneConversationHero.CharacterObject;
bool isAlliedLord = Campaign.Current.ConversationManager.IsTagApplicable("PlayerIsAlliedTag", speaker);
if (isAlliedLord)
{
    Debug.Print(speaker.Name + " is a lord of the player's map faction", 0);
}
```

想在代码里复用同一判据（而不是走对话管理器），直接调它依赖的那个 helper：

```csharp
CharacterObject candidate = Hero.MainHero.CharacterObject;
bool allied = candidate.IsHero
    && DiplomacyHelper.IsSameFactionAndNotEliminated(candidate.HeroObject.MapFaction, Hero.MainHero.MapFaction);
Debug.Print("map faction = " + candidate.HeroObject.MapFaction.Name + " allied = " + allied, 0);
```

枚举「地图上所有吃这个标签的英雄」，即所有与玩家同阵营的存活领主：

```csharp
string tagId = AlliedLordTag.Id;
foreach (Hero lord in Hero.AllAliveHeroes)
{
    if (Campaign.Current.ConversationManager.IsTagApplicable(tagId, lord.CharacterObject))
    {
        Debug.Print(lord.Name + " of " + lord.MapFaction.Name + " qualifies", 0);
    }
}
```

## 风险与边界

- **类名 ≠ 注册名。** 这是本类型最大的坑：`AlliedLordTag` 注册成 `"PlayerIsAlliedTag"`。写错的后果是静默的（`FailedAssert` + 返回 false），不是异常。
- **不是可 `new` 的运行时对象。** 全树没有 `new AlliedLordTag(`，实例由 `InitializeTags` 用无参构造反射建立并缓存；自己 new 出来的实例不在 `_tags` 里，`IsTagApplicable` 不会问它。派生标签也必须有 public 无参构造，否则启动期 `MissingMethodException`。
- **比较的是 `MapFaction` 而不是 `Clan`/`Kingdom`。** 玩家脱离王国后 `Hero.MainHero.MapFaction` 会变，标签结果随之变，而旧的 `Clan`/`Kingdom` 关系没变。别拿 `Clan` 关系推断标签结果。
- **名字里的 "Lord" 没有任何实现支撑。** 没有 `IsLord` / `Clan.IsNoble` 之类检查。玩家的附庸领主和普通领主都会被判 true。
- **普通士兵永远是 false。** `IsHero` 的早退让带队士兵拿不到这个标签。
- **灭国即失效。** 任一方 `IsEliminated` 为真时 helper 直接返回 false。
- **阵营为 null 时安全返回 false。** `IsSameFactionAndNotEliminated` 先判两个参数非 null，无主角色（如部分流浪汉）不会 NRE。
- **每个 `ChoiceTag` 重算一次。** `ConversationManager.FindMatchingScore` 对每个 ChoiceTag 调一次，本例开销可忽略。
- **不受 CampaignOptions 影响。** 与 `CampaignOptions.IsLifeDeathCycleDisabled` 之类无关。

## 怎么用

### 怎么拿到它

不要 `new`。注册是一次性的反射动作，发生在 `ConversationManager.InitializeTags()`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs:1032`）：它先 `new Dictionary<string, ConversationTag>()`（`:1034`），然后遍历 `ModuleHelper.GetActiveGameAssemblies()` 的每个程序集，对其中 `item.IsSubclassOf(typeof(ConversationTag))` 的类型做 `Activator.CreateInstance(item)`（`:1063`），再用 `conversationTag.StringId` 作为键 `_tags.Add(...)`（`:1064`）。

**你的 mod 程序集能被扫到有个前提**：`:1039`-`:1053` 逐个比较程序集名与它的 `GetReferencedAssemblies()`，只有引用了 `TaleWorlds.CampaignSystem` 的程序集才进入内层循环。所以一个自己声明标签、但没引用 CampaignSystem 的程序集，它的标签**一个都不会注册**，而且不报错。

你真正要「拿到」的是那个字符串字面量：`AlliedLordTag.cs:7` 的 `public const string Id = "PlayerIsAlliedTag"` 和 `:9` 的 `StringId`。消费入口只有两个——`IsTagApplicable(tagId, character)`（`ConversationManager.cs:1094`）与 `GetApplicableTagNames(character)`（`:1083`），两者都挂在 `Campaign.ConversationManager` 上（`Campaign.cs:538`，实例在 `:1576` 构造）。

### 典型用法

在对话数据里引用它时，写的是 `tag_name`，不是类名。`ChoiceTag` 的判据求值在 `FindMatchingScore`（`:1013`）：非 `"DefaultTag"` 的每一条都跑 `IsTagApplicable(choiceTag.TagName, character) == choiceTag.IsTagReversed`（`:1021`），成立就把整条变体的分数打成 `-2.1474836E+09f` 直接出局，否则把 `choiceTag.Weight` 累加（`:1025`-`:1026`）。**权重是相加的，出局是一票否决**——这两件事决定了你该怎么配。

写完一段对话数据后，先用 `GetApplicableTagNames` 确认注册与判定都成立，再去看台词：

```csharp
public static class AlliedLordTagSelfCheck
{
    public static void Run(CharacterObject speaker)
    {
        ConversationManager mgr = Campaign.Current.ConversationManager;
        bool allied = mgr.IsTagApplicable(AlliedLordTag.Id, speaker);
        Debug.Print("registered probe = " + allied + " speaker = " + speaker.Name, 0);
        foreach (string tagName in mgr.GetApplicableTagNames(speaker))
        {
            Debug.Print("applicable tag = " + tagName, 0);
        }
    }
}
```

`GetApplicableTagNames` 的价值在于它**不按名字查**：它把 `_tags.Values` 全过一遍（`:1085`），成立就 `yield return value.StringId`（`:1089`）。用类名查不到、怀疑拼写或注册问题时，打这一行比反复试字面量快得多。

要注意 `IsTagApplicable` 的失败路径是 `Debug.FailedAssert(...)` 后 `return false`（`:1100`-`:1101`）。**在开发构建里它会弹断言，在发布构建里它只是一句日志**，所以线上「台词变体不见了」的第一嫌疑永远是名字，而不是判定逻辑。

### 最容易踩的坑

**类名 ≠ 注册名。** 这是本类型最大的坑：`AlliedLordTag` 注册成 `"PlayerIsAlliedTag"`。写错的后果是静默的（`FailedAssert` + 返回 false），不是异常。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AlliedLordTag.cs` 是 19 行、3 个成员，判据单条、无条件编译分支。1.4.6 与 1.3.15 的同名文件公开表面与之逐成员一致，未见新增或移除。

## 依赖关系

- 基类：[ConversationTag](../ConversationTag) 只声明 `StringId` / `IsApplicableTo` 两个抽象成员，`ToString()` 返回 `StringId`
- 注册与查询：[ConversationManager](../ConversationManager) 的 `InitializeTags()` 反射建实例、`IsTagApplicable(string, CharacterObject)` 查表转发，同文件 `FindMatchingScore` 用它给台词变体打分
- 判据 helper：[DiplomacyHelper](../../system/DiplomacyHelper) 的 `IsSameFactionAndNotEliminated(IFaction, IFaction)` 是「同阵营且都未被消灭」的唯一实现
- 被查对象：[CharacterObject](../CharacterObject) 的 `IsHero` 与 `HeroObject`，以及 [Hero](../Hero) 的 `MapFaction`
- 阵营接口：[IFaction](../IFaction) 提供 `IsEliminated`，`Faction` 是其具体实现
- 同族标签：[AmoralTag](../AmoralTag)、[AnyNotableTypeTag](../AnyNotableTypeTag) 是同命名空间同构的另外两个标签
