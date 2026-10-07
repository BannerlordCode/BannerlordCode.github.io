---
title: "CampaignSounds"
description: "音效路径常量表 CampaignSounds：四个 event:/ui/campaign/... 字符串。实测全树 0 引用 —— 187 个 PlayUISound 调用里 185 个直接写字面量，常量表是文档不是机制。同文件另有 14 个同构兄弟表。"
---

# CampaignSounds

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CampaignSounds`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/UISoundsHelper.cs`

## 概述

全文只有 8 行，而且是**嵌在 [UISoundsHelper](../UISoundsHelper/) 里的 15 个嵌套常量表之一**。声明在 `UISoundsHelper.cs:87`，四个 `const string` 分别是：

- `PartySound` = `event:/ui/campaign/click_party`，见 `UISoundsHelper.cs:89`
- `PartyEnemySound` = `event:/ui/campaign/click_party_enemy`，见 `UISoundsHelper.cs:91`
- `SettlementSound` = `event:/ui/campaign/click_settlement`，见 `UISoundsHelper.cs:93`
- `SettlementEnemySound` = `event:/ui/campaign/click_settlement_enemy`，见 `UISoundsHelper.cs:95`

**但这四个常量的全树引用数是 0**（实测 grep `\.PartySound\b` 等四个名字，均 0 命中）。真正在放声音的是 `UISoundsHelper.PlayUISound(string)`，而它有 **187 个调用点，其中 185 个直接写字符串字面量**，只有 2 个传常量。

同文件的另外 14 个同构表，声明行号（实测）：

- `DefaultSounds` —— `UISoundsHelper.cs:7`
- `PanelSounds` —— `UISoundsHelper.cs:20`
- `SiegeSounds` —— `UISoundsHelper.cs:39`
- `InventorySounds` —— `UISoundsHelper.cs:46`
- `PartySounds` —— `UISoundsHelper.cs:51`
- `CraftingSounds` —— `UISoundsHelper.cs:58`
- `EndgameSounds` —— `UISoundsHelper.cs:73`
- `NotificationSounds` —— `UISoundsHelper.cs:82`
- `MissionSounds` —— `UISoundsHelper.cs:98`
- `MultiplayerSounds` —— `UISoundsHelper.cs:103`
- `OrderOfBattleSounds` —— `UISoundsHelper.cs:108`
- `PortSounds` —— `UISoundsHelper.cs:115`
- `KingdomSounds` —— `UISoundsHelper.cs:122`

**它们形状完全相同，按「同构不单独成页」的口径，本页代表这一族。**

## 心智模型
把它当成**「音效路径的字典页」，而不是「音效的定义」**。四条推论：

第一，**它不定义任何音效，只记录路径字符串。** 四个值都是 `event:/ui/campaign/...` 形式的 Wwise 事件名（`event:` 前缀）。**真正的音频资源不在 C# 树里**，在引擎的资源包里。改了这里的字符串，mod 还得自己带上对应的音频资源才有声音。

第二，**它不参与播放。** 播放入口是 [UISoundsHelper](../UISoundsHelper/) 上的 `PlayUISound`。**常量表与播放之间没有任何自动关联** —— 你必须自己把字符串传进去。

第三，**全树 0 引用这件事本身是有信息量的。** 187 个调用点里 185 个写字面量，说明**写代码的人习惯直接写路径而不是查表**。这带来一个具体的 modder 风险：**你 grep `CampaignSounds.PartySound` 找不到调用点，不代表这个音效没被用** —— 它被以字面量 `"event:/ui/campaign/click_party"` 的形式用了。

第四，**`const` 意味着编译期内联，没有运行期开销，但也没有单一修改点。** 因为没人引用它，改这个常量**不会改变任何现有行为**。它是一份可查阅的索引，不是配置开关。

## 如何使用

**拿法：** 推荐直接用 [UISoundsHelper](../UISoundsHelper/) 播，常量表当作「路径怎么拼」的参考：

```csharp
using TaleWorlds.MountAndBlade.View;

// 正确用法：把常量当模板，实际调用仍走 PlayUISound。
// 常量值来自 UISoundsHelper.cs:89
UISoundsHelper.PlayUISound(CampaignSounds.PartySound);   // event:/ui/campaign/click_party

// 引擎自己的写法（实测占 185/187）：直接写字面量
// UISoundsHelper.PlayUISound("event:/ui/default");
```

做一张自己的音效表（比散落的字面量更安全）：

```csharp
using TaleWorlds.MountAndBlade.View;

public static class MyModSounds
{
    // 形状与 CampaignSounds（UISoundsHelper.cs:87）完全一致
    public const string SelectPartySound = "event:/ui/campaign/click_party";
    public const string SelectEnemyPartySound = "event:/ui/campaign/click_party_enemy";
    public const string OpenLedgerSound = "event:/ui/campaign/click_settlement";

    public static void Play(string eventPath)
    {
        // 唯一入口；常量表不参与播放
        UISoundsHelper.PlayUISound(eventPath);
    }
}
```

校验「我拼的路径和引擎表里的一致」：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade.View;

public static class SoundPathAudit
{
    // UISoundsHelper.cs:87 那张表的四个值，抄一份做断言用
    private static readonly Dictionary<string, string> KnownCampaignPaths = new()
    {
        ["PartySound"] = "event:/ui/campaign/click_party",                 // UISoundsHelper.cs:89
        ["PartyEnemySound"] = "event:/ui/campaign/click_party_enemy",      // UISoundsHelper.cs:91
        ["SettlementSound"] = "event:/ui/campaign/click_settlement",       // UISoundsHelper.cs:93
        ["SettlementEnemySound"] = "event:/ui/campaign/click_settlement_enemy" // UISoundsHelper.cs:95
    };

    public static bool IsKnownPath(string eventPath)
    {
        return KnownCampaignPaths.ContainsValue(eventPath);
    }
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public static class CampaignSounds`（`UISoundsHelper.cs:87`） | **嵌套在 [UISoundsHelper](../UISoundsHelper/) 内部**，不是顶层类型。用的时候写 `UISoundsHelper.CampaignSounds` 或靠 `using static` 引入。文件头只有 `using TaleWorlds.Engine;` 一行。 |
| `PartySound` | `public const string PartySound = "event:/ui/campaign/click_party"`（`UISoundsHelper.cs:89`） | 选中己方部队的点击音。**实测引用数 0。** |
| `PartyEnemySound` | `public const string PartyEnemySound = "event:/ui/campaign/click_party_enemy"`（`UISoundsHelper.cs:91`） | 选中敌方部队的点击音。**实测引用数 0。** |
| `SettlementSound` | `public const string SettlementSound = "event:/ui/campaign/click_settlement"`（`UISoundsHelper.cs:93`） | 选中己方定居点的点击音。**实测引用数 0。** |
| `SettlementEnemySound` | `public const string SettlementEnemySound = "event:/ui/campaign/click_settlement_enemy"`（`UISoundsHelper.cs:95`） | 选中敌方定居点的点击音。**实测引用数 0。** |

同文件另外 14 个同构常量表的声明位置（实测，每条一个声明点）：

- `DefaultSounds` —— `UISoundsHelper.cs:7`
- `PanelSounds` —— `UISoundsHelper.cs:20`
- `SiegeSounds` —— `UISoundsHelper.cs:39`
- `InventorySounds` —— `UISoundsHelper.cs:46`
- `PartySounds` —— `UISoundsHelper.cs:51`
- `CraftingSounds` —— `UISoundsHelper.cs:58`
- `EndgameSounds` —— `UISoundsHelper.cs:73`
- `NotificationSounds` —— `UISoundsHelper.cs:82`
- `MissionSounds` —— `UISoundsHelper.cs:98`
- `MultiplayerSounds` —— `UISoundsHelper.cs:103`
- `OrderOfBattleSounds` —— `UISoundsHelper.cs:108`
- `PortSounds` —— `UISoundsHelper.cs:115`
- `KingdomSounds` —— `UISoundsHelper.cs:122`
- 外层宿主 `UISoundsHelper` —— `UISoundsHelper.cs:5`

## 真实示例

自定义一个战役界面，并按引擎的习惯写法播音（对照 `CustomBattleScreen.cs:91` 那种字面量用法）：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.View;

public static class MyModCampaignUi
{
    public static void OnPartyClicked(bool isEnemy)
    {
        // 值取自 UISoundsHelper.cs:89 与 :91
        UISoundsHelper.PlayUISound(isEnemy
            ? "event:/ui/campaign/click_party_enemy"
            : "event:/ui/campaign/click_party");
    }

    public static void OnSettlementClicked(bool isEnemy)
    {
        // 值取自 UISoundsHelper.cs:93 与 :95
        UISoundsHelper.PlayUISound(isEnemy
            ? "event:/ui/campaign/click_settlement_enemy"
            : "event:/ui/campaign/click_settlement");
    }
}
```

证明「常量 0 引用但路径确实在用」——这是本页最重要的一条：

```csharp
using System.Collections.Generic;

// 实测：全树 PlayUISound 有 187 个调用点，185 个传字面量，
// 只有 2 个传常量。所以 grep 常量名找不到调用点，
// 不代表这些 event 路径没被使用。
public static class LiteralAudit
{
    private const int TotalCallSites = 187;
    private const int LiteralCallSites = 185;

    public static string Report()
    {
        return "PlayUISound 调用点 " + TotalCallSites
             + "，其中写字面量 " + LiteralCallSites
             + "，传常量的只有 " + (TotalCallSites - LiteralCallSites)
             + " 个 —— 常量表是字典，不是机制。";
    }
}
```

给整个 15 张表建一个名字索引（值直接从源码抄）：

```csharp
using System.Collections.Generic;

public static class UiSoundCatalog
{
    // 全部 15 张表的声明行，值可按需补全
    public static readonly Dictionary<string, string> DeclarationLines = new()
    {
        ["UISoundsHelper"] = "UISoundsHelper.cs:5",
        ["DefaultSounds"] = "UISoundsHelper.cs:7",
        ["PanelSounds"] = "UISoundsHelper.cs:20",
        ["SiegeSounds"] = "UISoundsHelper.cs:39",
        ["InventorySounds"] = "UISoundsHelper.cs:46",
        ["PartySounds"] = "UISoundsHelper.cs:51",
        ["CraftingSounds"] = "UISoundsHelper.cs:58",
        ["EndgameSounds"] = "UISoundsHelper.cs:73",
        ["NotificationSounds"] = "UISoundsHelper.cs:82",
        ["CampaignSounds"] = "UISoundsHelper.cs:87",
        ["MissionSounds"] = "UISoundsHelper.cs:98",
        ["MultiplayerSounds"] = "UISoundsHelper.cs:103",
        ["OrderOfBattleSounds"] = "UISoundsHelper.cs:108",
        ["PortSounds"] = "UISoundsHelper.cs:115",
        ["KingdomSounds"] = "UISoundsHelper.cs:122"
    };
}
```

## 风险与边界

- **四个常量全树 0 引用（实测）。** 改它们**不会改变任何现有行为**。
- **它不播放任何声音。** 播放入口是 `UISoundsHelper.PlayUISound`，常量与它之间没有自动关联。
- **`const` 编译期内联。** 没有运行期查找表，也没有「一处修改全局生效」。
- **`event:` 路径指向引擎音频资源，不在 C# 树里。** 改了路径但没有对应资源 = 静音。
- **嵌套类型。** 完整名是 `TaleWorlds.MountAndBlade.View.UISoundsHelper+CampaignSounds`，不是 `TaleWorlds.MountAndBlade.View.CampaignSounds`。
- **grep 找不到调用点 ≠ 路径没被用。** 185/187 的调用点是字面量。
- **同文件另有 14 个同构表。** 找音效时别只搜 `CampaignSounds`，15 张表都在同一个文件里。
- **不要按「常量表是权威」来改代码。** 想统一管理音效，得先把 185 个字面量收编，否则改常量毫无作用。

## 依赖关系

- 本类：`UISoundsHelper.cs:87` 类声明、`:89` 到 `:95` 四个常量（这一句指的都是同一个文件）
- 外层宿主：[UISoundsHelper](../UISoundsHelper/)，声明在 `UISoundsHelper.cs:5`；`PlayUISound` 是全类唯一的播放入口
- 同文件的 15 张表：全部嵌套在 [UISoundsHelper](../UISoundsHelper/) 内部，行号见上表
- 实际调用风格参照：`CustomBattleScreen.cs:91`（传字面量，不是常量）
- 命名空间 `TaleWorlds.MountAndBlade.View`；文件头唯一的 `using` 是 `TaleWorlds.Engine`
- 桶首页：[mission-ext API 分区](../)