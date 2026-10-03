---
title: "AntiEmpireConspiracyBeginsSceneNotificationItem"
description: "「反帝国阴谋开始」过场通知：只覆写 TitleText，用 GameText 键 str_empire_conspiracy_supports_antiempire 把反帝国阵营名与日期合并成标题。"
---

# AntiEmpireConspiracyBeginsSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AntiEmpireConspiracyBeginsSceneNotificationItem : EmpireConspiracySupportsSceneNotificationItemBase`
**Base:** `EmpireConspiracySupportsSceneNotificationItemBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/AntiEmpireConspiracyBeginsSceneNotificationItem.cs`

## 概述

这是**帝国阴谋剧情线**的两个分支之一：站在反帝国一方的版本。它继承 [EmpireConspiracySupportsSceneNotificationItemBase](../EmpireConspiracySupportsSceneNotificationItemBase)（后者继承 `TaleWorlds.Core.SceneNotificationData`），自身**只覆写一个成员**——`TitleText`。

其余全部由基类提供且**不覆写**：过场 ID `scn_empire_conspiracy_supports_notification`、确认键 `str_ok`、两支重复的国王旗帜、以及一整套过场角色阵容（国王本人 + 3 个 `villager_battania` 阴谋者 + 2 个文化卫队）。所以本类型的全部信息量就是标题里那三段文本变量的组装方式。

## 心智模型

把它当成**「一个标题生成器 + 一份现成的过场模板」**。三件事：

1. **它没有官方构造点。** 全树 `new AntiEmpireConspiracyBeginsSceneNotificationItem(` 命中 **0**（阳性对照：同命名空间的 `new ProEmpireConspiracyBeginsSceneNotificationItem(` 在该类型自己的文件里出现 0 次，但 `new ClanMemberWarDeathSceneNotificationItem(` 在 `DeathNotificationItemVM.cs:28` 命中，说明「`new XxxSceneNotificationItem(`」这类探针有效）。全树对 `EmpireConspiracy` 的引用也只出现在 `SceneInformationPopupTypes/` 目录内的四个文件之间（阳性对照：`SceneNotificationData` 在 `LordConversationsCampaignBehavior.cs:3086`、`DeathNotificationItemVM.cs:28`、`HeirComeOfAgeNotificationItemVM.cs:22` 等处被使用，说明该类型族本身是活的）。**结论：1.4.5 的战役系统里没有任何代码发出这条过场通知**——mod 或剧情 mod 必须自己 `new`，再交给 `MBInformationManager.ShowSceneNotification(...)`。

2. **标题是三个变量拼出来的，每次访问都重算。** `TitleText` 是一个 `get`-only 的 `override`，内部：

   ```csharp
   List<TextObject> list = new List<TextObject>();
   foreach (Kingdom antiEmpireFaction in _antiEmpireFactions)
   {
       list.Add(antiEmpireFaction.InformalName);
   }
   TextObject textObject = GameTexts.FindText("str_empire_conspiracy_supports_antiempire");
   textObject.SetTextVariable("FACTION_NAMES", GameTexts.GameTextHelper.MergeTextObjectsWithComma(list, includeAnd: true));
   textObject.SetTextVariable("DAY_OF_YEAR", CampaignSceneNotificationHelper.GetFormalDayAndSeasonText(CampaignTime.Now));
   textObject.SetTextVariable("YEAR", CampaignTime.Now.GetYear);
   return textObject;
   ```

   **三个变量：`FACTION_NAMES`（逗号合并的反帝国王国名，带「and」）、`DAY_OF_YEAR`（正式日期+季节文本）、`YEAR`（当前年份）。** 注意 `GameTexts.FindText` 返回的对象被**就地 `SetTextVariable` 修改**——如果翻译表做了实例缓存，多次读 `TitleText` 可能污染同一个对象。这与本桶其它通知「每次 `new TextObject`」的写法形成对比。

3. **与 ProEmpire 版本的差别只有一处。** `ProEmpireConspiracyBeginsSceneNotificationItem` 的构造器**只收 `kingHero`**，不收阵营列表，用 `str_empire_conspiracy_supports_proempire`；本类型构造器收 `(Hero kingHero, List<Kingdom> antiEmpireFactions)`，用 `str_empire_conspiracy_supports_antiempire` 并填 `FACTION_NAMES`。**其余 100% 复用基类。** 所以两者可以互换的只有「标题文本」这一环。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_antiEmpireFactions` | `private readonly List<Kingdom> _antiEmpireFactions` | 唯一字段，构造器原样持有一个 `List<Kingdom>` 引用——**不复制、不判空、不做快照**。`TitleText` 在 `foreach` 里只读它的 `InformalName`。**注意它没有 `[SaveableField]`，过场通知不存档。** |
| `TitleText` | `public override TextObject TitleText { get; }` | 全类型唯一覆写。取 `str_empire_conspiracy_supports_antiempire`，填 `FACTION_NAMES`（`MergeTextObjectsWithComma(list, includeAnd: true)`）、`DAY_OF_YEAR`（`GetFormalDayAndSeasonText(CampaignTime.Now)`）、`YEAR`（`CampaignTime.Now.GetYear`）。**每次访问都重新走一遍这套组装**。 |
| 构造器 | `public AntiEmpireConspiracyBeginsSceneNotificationItem(Hero kingHero, List<Kingdom> antiEmpireFactions) : base(kingHero)` | 先 `base(kingHero)` 存国王，再存阵营列表引用。**无判空**：`kingHero` 为 null 会在基类构造链里让 `GetBanners()` 崩；`antiEmpireFactions` 为 null 则 `TitleText` 的 `foreach` 直接 NRE。 |
| `King`（继承） | `public Hero King { get; }` | 基类持有。`GetBanners()` 取 `King.MapFaction.Banner` 两次；`GetSceneNotificationCharacters()` 用 `King.CivilianEquipment` 与 `King.MapFaction.Culture` 生成 6 个角色。**国王为 null 时基类的每个成员都会崩。** |
| `SceneID`（继承） | `public override string SceneID => "scn_empire_conspiracy_supports_notification"` | 基类硬编码，**ProEmpire 与 AntiEmpire 共用同一个过场场景**。场景资源缺失会导致过场播不出来。 |
| `GetSceneNotificationCharacters`（继承） | `public override SceneNotificationCharacter[] GetSceneNotificationCharacters()` | 基类实现：用 `MBObjectManager` 取 `villager_battania` 与 `conspirator_cutscene_template`，克隆装备、移除武器、随机身体属性，产出国王 + 3 阴谋者 + 2 卫队共 6 人。**它读 `MBRandom.RandomInt(100)`，所以每次调用结果不同。** |

## 真实示例

mod 里手动发这条过场通知（官方 1.4.5 不发）：

```csharp
List<Kingdom> againstEmpire = new List<Kingdom>();
Kingdom sturgia = Kingdom.All.Find((Kingdom k) => k.StringId == "sturgia");
if (sturgia != null)
{
    againstEmpire.Add(sturgia);
    SceneNotificationData data = new AntiEmpireConspiracyBeginsSceneNotificationItem(Hero.MainHero, againstEmpire);
    MBInformationManager.ShowSceneNotification(data);
    Debug.Print("scene=" + data.SceneID + " title=" + data.TitleText, 0);
}
```

对比 ProEmpire 分支：同一个基类、同一场景，只差构造参数与翻译键：

```csharp
SceneNotificationData proData = new ProEmpireConspiracyBeginsSceneNotificationItem(Hero.MainHero);
SceneNotificationData antiData = new AntiEmpireConspiracyBeginsSceneNotificationItem(
    Hero.MainHero, new List<Kingdom> { Kingdom.All[0] });
Debug.Print("pro scene=" + proData.SceneID + " anti scene=" + antiData.SceneID, 0);
Debug.Print("same scene? " + (proData.SceneID == antiData.SceneID), 0);
```

只取标题文本（不开过场），用于日志或调试：

```csharp
List<Kingdom> factions = new List<Kingdom>();
foreach (Kingdom kingdom in Kingdom.All)
{
    if (kingdom.StringId == "sturgia" || kingdom.StringId == "aserai")
    {
        factions.Add(kingdom);
    }
}
AntiEmpireConspiracyBeginsSceneNotificationItem item =
    new AntiEmpireConspiracyBeginsSceneNotificationItem(Hero.MainHero, factions);
Debug.Print("title=" + item.TitleText, 0);
```

## 风险与边界

- **官方 1.4.5 没有任何构造点。** `new AntiEmpireConspiracyBeginsSceneNotificationItem(` 全树 0 命中（阳性对照：`new ClanMemberWarDeathSceneNotificationItem(` 在 `DeathNotificationItemVM.cs:28` 命中，证明这类探针有效）。对 `EmpireConspiracy` 的引用也全部局限在 `SceneInformationPopupTypes/` 目录内。**只能 mod 自己构造并 `MBInformationManager.ShowSceneNotification`。**
- **两个构造参数都没有判空。** `kingHero` 为 null 时基类的 `GetBanners()`（`King.MapFaction.Banner`）立刻崩；`antiEmpireFactions` 为 null 时 `TitleText` 的 `foreach` NRE。**这是本类型最常见的崩溃源。**
- **`_antiEmpireFactions` 是引用而非副本。** 构造后修改传入的 `List<Kingdom>` 会同步改变 `TitleText` 的输出；反之若构造后立刻把局部 list 置空，通知标题会空。
- **不存档。** `_antiEmpireFactions` 没有 `[SaveableField]` 标记，`SceneNotificationData` 本身也不在 `SaveableCampaignTypeDefiner` 里。**过场通知是一次性 UI，读档后必然重建。**
- **`GameTexts.FindText` 的返回值被就地修改。** `TitleText` 拿到 key 对应的 `TextObject` 后连设三个变量。**如果翻译表对同一 key 返回同一实例，多次读 `TitleText` 会叠加覆盖上一次的结果**——本类型没有本桶其它通知那种「每次 new 一个干净对象」的保险。
- **过场角色每次调用都随机。** `GetSceneNotificationCharacters()` 用 `MBRandom.RandomInt(100)` 生成 `BodyProperties`，所以**连续读两次会得到不同的身体参数**。如果你要拿它做确定性截图或校验，先缓存结果。
- **场景 ID 与 ProEmpire 共用。** `scn_empire_conspiracy_supports_notification` 被两个分支共用，资源缺失时**两个分支一起播不出来**，且没有降级路径。
- **依赖 `MBObjectManager` 的硬编码 id。** 基类取 `"villager_battania"` 与 `"conspirator_cutscene_template"` 两个固定 StringId，**缺任何一个都会 NRE**（无判空）。
- **`CampaignSceneNotificationHelper.GetFormalDayAndSeasonText` 与 `CampaignTime.Now` 依赖战役已启动。** 在战役外读 `TitleText` 会 NRE。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/AntiEmpireConspiracyBeginsSceneNotificationItem.cs` 是 33 行、2 个公开成员（`TitleText` override + 构造器），唯一字段 `_antiEmpireFactions` 无存档标记。1.4.6 同名文件公开表面一致。

基类 `EmpireConspiracySupportsSceneNotificationItemBase.cs` 是 46 行，1.4.5 与 1.4.6 一致。姊妹类 `ProEmpireConspiracyBeginsSceneNotificationItem.cs` 是 23 行——**比本类型短 10 行，差的正是阵营列表的组装。**

## 依赖关系

- 基类：[EmpireConspiracySupportsSceneNotificationItemBase](../EmpireConspiracySupportsSceneNotificationItemBase)，提供 `King`、硬编码 `SceneID`、重复旗帜、以及 6 人过场阵容
- 更上层：`TaleWorlds.Core` 的 `SceneNotificationData`（`Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/SceneNotificationData.cs`），提供 `SceneNotificationCharacter` / `SceneNotificationShip` 两个嵌套 struct 与全套 `virtual` 默认成员
- 载荷：`List<Kingdom>` 的 `InformalName`，与 `Hero kingHero`（基类的 `King`）
- 文案：[GameTexts](../GameTexts).FindText("str_empire_conspiracy_supports_antiempire") 与 `GameTexts.GameTextHelper.MergeTextObjectsWithComma(list, includeAnd: true)`（`PartyBaseHelper.cs:337` 有同形态用法）
- 日期：[CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper).GetFormalDayAndSeasonText（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs:149`）与 `CampaignTime.Now.GetYear`
- 角色数据：`MBObjectManager` 里的 `villager_battania` 与 `MBEquipmentRoster` 里的 `conspirator_cutscene_template`
- 呈现入口：`MBInformationManager.ShowSceneNotification(...)`，同族用法见 `LordConversationsCampaignBehavior.cs:3086`
- 姊妹分支：[ProEmpireConspiracyBeginsSceneNotificationItem](../ProEmpireConspiracyBeginsSceneNotificationItem)，同基类同场景，仅标题文本不同
