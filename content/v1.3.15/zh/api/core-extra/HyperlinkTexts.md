---
title: HyperlinkTexts
description: HyperlinkTexts - 超链接文本工厂，生成可点击的实体链接和按键图?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HyperlinkTexts`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HyperlinkTexts

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** static class

## 概述

`HyperlinkTexts

` ?*超链接和图标文本的工厂类**。它提供静态方法生成可点击的实体链接（定居点、王国、英雄、氏族、概念、船只、部队）和按键图标，以及大量预定义的图标常量（金币、士气、影响力等）。生成的文本嵌入 HTML 标签（`&lt;a&gt;

`、`&lt;img&gt;

`），?UI 渲染层解析为可交互元素?
**实体超链?*（`Get*HyperlinkText

`）：7 种实体类型各有专用方法，返回 

`TextObject

`。链接格式为 

`{=!}{.link}&lt;a style="Link.{Type}" href="event:{LINK}"&gt;&lt;b&gt;{NAME}&lt;/b&gt;&lt;/a&gt;

`，其?

`style

` 指定链接样式（`Link.Settlement

`、`Link.Hero

` 等），`href

` ?

`event:

` 前缀标识事件链接。UI 层捕获点击事件后根据 

`LINK

` 跳转到对应实体的百科页面?
**按键图标**（`GetKeyHyperlinkText

`）：将按?ID（如 

`"LeftMouseButton"

`、`"ControllerLUp"

`、`"F1"

`）映射为对应的图标精灵路径和尺寸。这是源码中最长的方法——使用巨大的哈希值分支树（`ComputeStringHash

`）实?O(1) 查找，覆盖所有键盘键、鼠标按钮和手柄按钮。支?Xbox/PS4/PS5 三种手柄布局，通过 

`IsPlayStationGamepadActive

` 委托检测。返回格式为 

`&lt;img src="General\InputKeys\{sprite}" extend="{size}"&gt;

`?
**图标常量**?1 个预定义常量（`GoldIcon

`、`MoraleIcon

`、`InfluenceIcon

`、`IssueAvailableIcon

` 等），格式为 

`{=!}&lt;img src="..." extend="..."&gt;

`。可直接嵌入 

`TextObject

` 或字符串中使用?
## 心智模型

?

`HyperlinkTexts

` 当作**富文本标记生成器**。游戏文本中不能直接?HTML，但可以通过这些方法生成包含可点击链接和图标?

`TextObject

`，UI 层会解析其中?HTML 标签并渲染为交互元素?
**关键概念：链接事件路?*。超链接使用 

`href="event:{LINK}"

` 格式。当玩家点击链接时，UI 层触发一个事件，事件处理器解?

`LINK

` 值（?

`"settlement:town_001"

`）并打开对应的百科页面。`.link

` 令牌配合 

`{=!}

` 前缀确保文本处理器不干扰 HTML 标签?
**关键概念：手柄按键映?*。`GetKeyHyperlinkText

` 中的巨型 switch 实际上是一个哈希查表：先计?

`keyID

` 的字符串哈希，然后用二分分支树定位到具体按键。每个按键映射到精灵名和尺寸（`extend

` 值控制图标大小）。手柄按键的精灵名和尺寸因主机类型而异——例?

`ControllerLUp

` ?Xbox 上是 

`controllerlup

` extend=16，在 PS 上追?

`_ps

` 后缀?
**关键概念：图标常量用?*。`GoldIcon

` 等常量可直接拼接进文本：

`"Cost: " + HyperlinkTexts.GoldIcon + " 1000"

`。注意常量以 

`{=!}

` 开头，表示禁用文本处理器的令牌解析，直接输出原?HTML?
## 主要方法

### 实体超链?
`

`

`csharp
public static TextObject GetSettlementHyperlinkText(string link, TextObject settlementName)
public static TextObject GetKingdomHyperlinkText(string link, TextObject kingdomName)
public static TextObject GetHeroHyperlinkText(string link, TextObject heroName)
public static TextObject GetConceptHyperlinkText(string link, TextObject conceptName)
public static TextObject GetClanHyperlinkText(string link, TextObject clanName)
public static TextObject GetShipHyperlinkText(string link, TextObject shipHullName)
public static TextObject GetUnitHyperlinkText(string link, TextObject unitName)
`

`

`
生成实体超链?

`TextObject

`。`link

` 为实体标识符（如 

`"settlement:ES1"

`），第二个参数为显示名称。生成的 HTML 使用 

`Link.{Type}

` 样式类?
### GetGenericHyperlinkText
`

`

`csharp
public static string GetGenericHyperlinkText(string link, string name)
`

`

`
生成通用超链接（返回 

`string

` 而非 

`TextObject

`）。使?

`Link

` 样式（无类型后缀）?
### GetGenericImageText
`

`

`csharp
public static string GetGenericImageText(string meshId, int extend = 0)
`

`

`
生成图片标签：`&lt;img src="{meshId}" extend="{extend}"&gt;

`?
### GetKeyHyperlinkText
`

`

`csharp
public static string GetKeyHyperlinkText(string keyID, float overrideExtendScale = 1f)
`

`

`
将按?ID 映射为按键图标。通过哈希值分支树查找按键对应的精灵名和尺寸。支持键盘（字母?数字?F?方向?修饰键等）、鼠标（??中键/滚轮/侧键）和手柄（方向键/摇杆/扳机/肩键/选项键）。手柄布局根据 

`IsPlayStationGamepadActive

` ?Xbox/PS4/PS5 间切换。`overrideExtendScale

` 缩放图标尺寸?
## 图标常量

\| 常量 \| 用?\|
\|------\|------\|
\| 

`GoldIcon

` \| 金币图标 \|
\| 

`MoraleIcon

` \| 士气图标 \|
\| 

`InfluenceIcon

` \| 影响力图?\|
\| 

`IssueAvailableIcon

` \| 可用议题图标 \|
\| 

`IssueActiveIcon

` \| 活跃议题图标 \|
\| 

`TrackedIssueIcon

` \| 追踪议题图标 \|
\| 

`QuestAvailableIcon

` \| 可用任务图标 \|
\| 

`QuestActiveIcon

` \| 活跃任务图标 \|
\| 

`StoryQuestActiveIcon

` \| 主线任务图标 \|
\| 

`TrackedStoryQuestIcon

` \| 追踪主线任务图标 \|
\| 

`InPrisonIcon

` \| 监禁状态图?\|
\| 

`ChildIcon

` \| 儿童状态图?\|
\| 

`PregnantIcon

` \| 怀孕状态图?\|
\| 

`IllIcon

` \| 患病状态图?\|
\| 

`HeirIcon

` \| 继承人图?\|
\| 

`UnreadIcon

` \| 未读消息图标 \|
\| 

`UnselectedPerkIcon

` \| 未选择特长图标 \|
\| 

`HorseIcon

` \| 坐骑图标 \|
\| 

`CrimeIcon

` \| 犯罪图标 \|
\| 

`UpgradeAvailableIcon

` \| 可升级图?\|
\| 

`FocusIcon

` \| 专注点图?\|

## 使用示例

### 示例 1: 在文本中嵌入实体链接

`

`

`csharp
using TaleWorlds.Core;

// 创建包含英雄链接的文?Hero hero = Hero.MainHero;
TextObject heroLink = HyperlinkTexts.GetHeroHyperlinkText(
    hero.EncyclopediaLink,  // 链接标识?    hero.Name);              // 显示名称

// "You met {HERO_LINK} in the tavern."
TextObject message = new TextObject("You met {HERO_LINK} in the tavern.");
message.SetTextVariable("HERO_LINK", heroLink);
// 渲染?heroLink 部分会显示为可点击的蓝色加粗名字

// 定居点链?Settlement settlement = Settlement.All[0];
TextObject settlementLink = HyperlinkTexts.GetSettlementHyperlinkText(
    settlement.EncyclopediaLink,
    settlement.Name);
`

`

`

### 示例 2: 在文本中嵌入按键提示和图?
`

`

`csharp
using TaleWorlds.Core;

// 显示按键提示 "Press [Space] to continue"
string spaceKey = HyperlinkTexts.GetKeyHyperlinkText("Space");
TextObject hint = new TextObject("{=!}Press " + spaceKey + " to continue");

// 显示带金币图标的价格
string priceText = "Cost: " + HyperlinkTexts.GoldIcon + " 5000";
TextObject cost = new TextObject(priceText);

// 组合使用：按?+ 图标 + 链接
Hero hero = Hero.MainHero;
TextObject complex = new TextObject("{=!}" +
    HyperlinkTexts.GetKeyHyperlinkText("LeftAlt") +
    " to talk to " +
    HyperlinkTexts.GetHeroHyperlinkText(hero.EncyclopediaLink, hero.Name) +
    ". Reward: " + HyperlinkTexts.GoldIcon + " 1000");
`

`

`

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
- [

`TextObject

`](../localization/TextObject) ?本地化文本对?