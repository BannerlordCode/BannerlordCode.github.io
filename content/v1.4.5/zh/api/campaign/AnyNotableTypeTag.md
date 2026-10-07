---
title: "AnyNotableTypeTag"
description: "对话条件标签：对方是任意一种「本地人」（工匠/匪首/传教士/商人/乡村望族/头人）时成立，是对话文本里最泛用的人物类别筛选器。"
---

# AnyNotableTypeTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AnyNotableTypeTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AnyNotableTypeTag.cs`

## 概述

`AnyNotableTypeTag` 回答一个问题：**这个人是不是「本地人」里的任何一种**。名字里的 "AnyNotable" 对应 [Hero](../Hero).IsNotable 那个六选一的联合判断——工匠 `IsArtisan`、匪首 `IsGangLeader`、传教士 `IsPreacher`、商人 `IsMerchant`、乡村望族 `IsRuralNotable`，外加前面的五者都不成立时兜底的 `IsHeadman`（村庄头人）。

它是对话文本里最泛用的人物类别筛选器：1.4.5 全树唯一一处代码引用出现在 `LordConversationsCampaignBehavior.cs:907`，用来给「听从命令」这条应答线加一个小权重，意思接近「既然你是个有身份的人，我就叫你大人」。注意它**不区分具体是哪一种**——想要「只对商人」必须用别的标签。

## 心智模型

三个成员、一行判据的极简族。链路是反射注册 + 字符串查表：`ConversationManager.InitializeTags()`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs:1032`）遍历所有活动游戏程序集里 `ConversationTag` 的子类，对每个类型 `Activator.CreateInstance(item)`，以 `StringId` 为键塞进 `_tags`。运行时的入口是 `Campaign.Current.ConversationManager.IsTagApplicable("AnyNotableTypeTag", character)`。

要记住的四点：

1. **先 `IsHero`。** `character.IsHero` 为假直接返回 false。玩家的家族成员是英雄，但一个扛着货的普通 merchant-class `CharacterObject` 在对话里能否拿到这个标签，取决于它在数据里是不是 `IsHero`。带队的普通士兵与农夫永远拿不到。
2. **判据是 `Hero.IsNotable` 这个属性，不是职业枚举。** `IsNotable` 内部是「五个 true 任一成立，否则看 `IsHeadman`」。它**不含 `IsLord`**——领主不因此自动是 notable；一个 `Occupation.Lord` 但五项全 false 的英雄，`IsNotable` 会落到 `IsHeadman` 判断上，通常为 false。名字里的 "Notable" 在游戏里指「本地人」这个社会阶层，不是「名人」。
3. **它只给条件，不给台词。** 权重和方向都写在对话数据上。真实用法在 `LordConversationsCampaignBehavior.cs:907`：

   ```csharp
   .Variation("{=MTxuTZDA}I'll be here, your {?PLAYER.GENDER}ladyship{?}lordship{\\?}.", "UnderCommandTag", 5, "AnyNotableTypeTag", 1, "WandererTag", -1)
   ```

   这里 `AnyNotableTypeTag` 权重 **1**（正向：成立则加分），`WandererTag` 权重 **-1**（**反向**：`FindMatchingScore` 里 `IsTagApplicable(...) == choiceTag.IsTagReversed` 时整条变体直接出局，所以负权重等价于「要求该标签**不**成立」）。整句的效果是「在玩家下令、对方是有身份的人、且对方不是流浪汉时，才说这句客气话」。
4. **拼错名字是静默失败。** `IsTagApplicable` 查不到键时只 `Debug.FailedAssert("Asking for a nonexistent tag: " + tagId, ...)` 并返回 false，台词变体被无声剪掉。

`Id` 与 `StringId` 都是 `"AnyNotableTypeTag"`，两者一致；`_tags.Add(...)` 用的是 `Add`，同名标签会在启动期抛 `ArgumentException`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public const string Id = "AnyNotableTypeTag"` | C# 侧引用用的常量字符串，值与 `StringId` 相同。引擎**不读**它——`_tags` 的键来自 `StringId`。它的实际用处是让代码里拼权重参数时不必手写字面量。 |
| `StringId` | `public override string StringId => "AnyNotableTypeTag"` | 反射注册进 `_tags` 的键，也是对话数据 `ChoiceTag.tag_name` 里要写的名字。基类 `ToString()` 返回它，调试打印标签时看到的就是这个字符串。 |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | 唯一的行为。`IsHero` 早退后返回 `character.HeroObject.IsNotable`。无缓存、无副作用，每次对话给台词变体打分时对每个候选角色重算。 |

## 真实示例

查询当前对话对象是否属于「本地人」这一阶层：

```csharp
CharacterObject speaker = Hero.OneToOneConversationHero.CharacterObject;
bool notable = Campaign.Current.ConversationManager.IsTagApplicable("AnyNotableTypeTag", speaker);
if (notable)
{
    Debug.Print(speaker.Name + " counts as a notable", 0);
}
```

想知道具体是哪一种，自己把六项拆开看——`IsApplicableTo` 只给一个合并后的 bool：

```csharp
CharacterObject npc = Hero.OneToOneConversationHero.CharacterObject;
if (npc.IsHero)
{
    Hero hero = npc.HeroObject;
    string kind = hero.IsArtisan ? "artisan"
        : hero.IsGangLeader ? "gang leader"
        : hero.IsPreacher ? "preacher"
        : hero.IsMerchant ? "merchant"
        : hero.IsRuralNotable ? "rural notable"
        : hero.IsHeadman ? "headman"
        : "plain noble";
    Debug.Print(hero.Name + " -> " + kind + " notable=" + hero.IsNotable, 0);
}
```

枚举地图上所有会触发这个对话标签的英雄，用来预判某批 NPC 的对话池：

```csharp
string tagId = AnyNotableTypeTag.Id;
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (Campaign.Current.ConversationManager.IsTagApplicable(tagId, hero.CharacterObject))
    {
        Debug.Print(hero.Name + " uses the notable dialogue pool", 0);
    }
}
```

## 风险与边界

- **不是可 `new` 的运行时对象。** 全树没有 `new AnyNotableTypeTag(`，实例由 `InitializeTags` 用无参构造反射建立并缓存；自己 new 的实例不在 `_tags` 里，`IsTagApplicable` 不会问它。派生标签同样需要 public 无参构造，否则启动期 `MissingMethodException`。
- **拼错 tag 名不抛异常。** `FailedAssert` 之后返回 false，台词变体被无声剪掉。排障先确认 `_tags` 里有这个 `StringId`。
- **tag 名在程序集内必须唯一。** `_tags.Add(...)` 重复键抛 `ArgumentException`，模块加载顺序决定谁先注册。
- **「notable」≠ 「lord」。** 判据里没有 `IsLord`。想要「只对领主」应改用领主专用标签（如 `LordTag` 族），别拿本标签凑。
- **普通士兵与农夫永远 false。** `IsHero` 早退挡住了他们；数据里被标成 `IsHeadman` 的村庄头人才例外。
- **职业变更会立刻改变结果。** `IsNotable` 是每次现算的属性，没有缓存；角色转职、被委任为头人、加入匪首集团后标签结论立刻变。
- **反向权重（负数）语义容易搞反。** 在 `FindMatchingScore` 里负权重代表「要求标签**不**成立」，不是「成立就减分」。
- **不受 CampaignOptions 影响。** 与生命死亡循环之类的开关无关。

## 怎么用

### 怎么拿到它

不 `new`。实例由 `ConversationManager.InitializeTags()`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationManager.cs:1032`）反射建立——`:1059` 遍历每个活动游戏程序集的类型，`:1061` 筛出 `ConversationTag` 的子类，`:1063` `Activator.CreateInstance(item)`，`:1064` 以 `StringId` 为键写入 `_tags`。**你这个 mod 程序集得引用 `TaleWorlds.CampaignSystem`，否则 `:1045`-`:1053` 的 `GetReferencedAssemblies()` 检查不会放行。**

要「拿到」的是名字。消费入口两个：`ConversationManager.IsTagApplicable(tagId, character)`（`:1094`）用于精确判定，`GetApplicableTagNames(character)`（`:1083`）用于排查。`Campaign.ConversationManager` 是属性（`Campaign.cs:538`），实例在 `:1576` new。

判据链只有一跳：`AnyNotableTypeTag.cs:13` 的 `character.HeroObject.IsNotable`，而 `Hero.IsNotable`（`Hero.cs:387`）内部是「`IsArtisan` / `IsGangLeader` / `IsPreacher` / `IsMerchant` / `IsRuralNotable` 五项全 false 时才去看 `IsHeadman`」（`:391`-`:395`）。**六项都不看 `IsLord`**——名字里的 Notable 指的是「本地人」这个社会阶层，不是「名人」。

### 典型用法

它只出现在 1.4.5 全树唯一一处代码引用：`LordConversationsCampaignBehavior.cs:907`，被包在一条 `.Variation(...)` 里，权重 **1**（正向加分）。同一批 `Variation` 里 `UnderCommandTag` 是 5、`WandererTag` 是 **-1**——**权重为负不是「减分」，是「要求该标签不成立」**：`FindMatchingScore`（`ConversationManager.cs:1013`）里 `IsTagApplicable(...) == choiceTag.IsTagReversed` 就直接 `return -2.1474836E+09f`（`:1021`-`:1023`），一条不满足整句就没了。

所以「我在听你的命令 → 你是本地人 → 但你不是流浪汉 → 我才说这句客气话」这条链，配的是三个标签而不是一个。仿写它时先量一遍当前对象落在哪一边：

```csharp
public static class NotableTypeGateProbe
{
    public static void Report(CharacterObject npc)
    {
        bool isNotable = npc.IsHero && npc.HeroObject.IsNotable;
        bool underCommand = Campaign.Current.ConversationManager.IsTagApplicable("UnderCommandTag", npc);
        Debug.Print(npc.Name + " notable=" + isNotable + " underCommand=" + underCommand, 0);
        if (!isNotable)
        {
            return;
        }
        Debug.Print("gate passed, this speaker can receive the courteous variant", 0);
    }
}
```

**别把 `GetApplicableTagNames` 当枚举工具用。** 它会调 `IsApplicableTo` 遍历全部 `_tags`（`:1085`-`:1089`），在遍历 NPC 列表的循环里调它就是 O(人数 × 标签数) 次重算，而每个 `IsApplicableTo` 都无缓存。一次查一个人即可，不要嵌在循环里。

### 最容易踩的坑

**不是可 `new` 的运行时对象。** 全树没有 `new AnyNotableTypeTag(`，实例由 `InitializeTags` 用无参构造反射建立并缓存；自己 new 的实例不在 `_tags` 里，`IsTagApplicable` 不会问它。派生标签同样需要 public 无参构造，否则启动期 `MissingMethodException`。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AnyNotableTypeTag.cs` 是 17 行、3 个成员，判据单行、无条件编译分支。1.4.6 与 1.3.15 的同名文件公开表面与之逐成员一致，未见新增或移除。

## 依赖关系

- 基类：[ConversationTag](../ConversationTag) 只声明 `StringId` / `IsApplicableTo` 两个抽象成员，`ToString()` 返回 `StringId`
- 注册与查询：[ConversationManager](../ConversationManager) 的 `InitializeTags()` 反射建实例、`IsTagApplicable(string, CharacterObject)` 查表转发，同文件 `FindMatchingScore` 处理权重与反向判定
- 被查对象：[CharacterObject](../CharacterObject) 提供 `IsHero` 与 `HeroObject`
- 判据本体：[Hero](../Hero) 的 `IsNotable`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Hero.cs:387`）是六项 `Is*` 的合取/析取组合
- 职业常量：[Occupation](../Occupation) 与 [Hero](../Hero) 的 `IsArtisan` / `IsGangLeader` / `IsPreacher` / `IsMerchant` / `IsRuralNotable` / `IsHeadman` 一同定义本地人阶层
- 同族标签：[AlliedLordTag](../AlliedLordTag)、[AmoralTag](../AmoralTag) 是同命名空间同构的另外两个标签
