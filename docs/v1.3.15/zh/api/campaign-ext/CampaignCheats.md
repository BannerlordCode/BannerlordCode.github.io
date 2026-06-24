<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignCheats`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignCheats

**命名空间:** TaleWorlds.CampaignSystem  
**模块:** TaleWorlds.CampaignSystem  
**类型:** public static class

## 概述

`CampaignCheats

` ?Bannerlord 原版所有战役作弊命令的容器。它是一个纯静态类，包含上百个形如 

`public static string XXX(List&lt;string&gt; strings)

` 的方法，每个方法对应一条控制台命令——参数通过 

`List&lt;string&gt;

` 传入（已按空格切分），返回值是要回显到控制台的提示文本。这些方法通过 

`[CommandLineCommandFunction]

` 特性或控制台命令注册机制暴露给游戏?

`CommandLine

` 系统，玩家在战役中按 

`Ctrl + ~

` 打开控制台即可调用?
所有命令在执行前都会通过 

`CheckCheatUsage(ref ErrorType)

` 检查两个前置条件：(1) 

`Campaign.Current

` 不为 null（战役已启动）；(2) 

`Game.Current.CheatMode

` ?true（配置文件中开启了作弊模式）。任一条件不满足都会返回错误信息并拒绝执行。`CheckParameters

` 用于校验参数个数，`CheckHelp

` 检测用户是否输入了 

`help

` 关键字以打印用法?
模组开发者可以通过两种方式扩展作弊系统：一是直接在 

`CampaignCheats

` 之外添加自己的静态方法并用相同的命令注册机制登记（推荐，避免修改原版文件）；二是调用 

`CampaignCheats

` 的辅助方法（

`CheckCheatUsage

`、`CheckParameters

`、`GetSeparatedNames

`、`ConcatenateString

`、`GetDefaultSettlement

`）来简化自定义命令的实现。理解这些辅助方法的约定很重要——你的命令应当遵循同样的"返回字符串、先检查作弊模式、校验参?模式?
## 心智模型

?

`CampaignCheats

` 看作"控制台命令到战役动作的适配器层"。每条命令的签名几乎一致：

`string Method(List&lt;string&gt; args)

`，内部流程也几乎一致：

`CheckCheatUsage

` ?

`CheckHelp

` ?

`CheckParameters

` ?解析参数 ?调用战役 API ?返回结果文本。这种统一模式让你可以快速读懂任意一条命令，也让你添加自定义命令时有清晰的模板可循?
命令大致分几类：**英雄/技?*（`AddSkillXpToHero

`、`SetSkillMainHero

`、`SetSkillCompanion

`、`SetAllHeroSkills

`、`SetSkillsOfGivenHero

`）?*聚落经济**（`SetLoyaltyOfSettlement

`、`SetProsperityOfSettlement

`、`SetMilitiaOfSettlement

`、`SetSecurityOfSettlement

`、`SetFoodOfSettlement

`、`SetHearthOfSettlement

`）?*文化/氏族**（`SetHeroCulture

`、`SetClanCulture

`）?*导入导出**（`ImportMainHero

`、`ExportMainHero

`——把主角的捏?技?特质序列化为文本）?*可视?*（`ShowSettlements

`、`HideSettlements

`——在地图上显?隐藏所有聚落）?*关系**（`AddHeroRelation

`、`ShowHeroRelation

`、`ShowHeroRelation

`）?*杂项**（`SetCraftingStamina

`、`PrintPlayerTrait

`、`PrintMainPartyPosition

`）?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`GetDefaultSettlement

` \| 

`Settlement

`（静态只读） \| 返回主角的家乡聚落；若为 null 则随机返回一个城镇的 Settlement。许多聚落类命令在用户未指定目标时用它作为默认操作对?\|

## 主要方法

### CheckCheatUsage

`

`

`csharp
public static bool CheckCheatUsage(ref string ErrorType)
`

`

`

检查当前是否允许执行作弊命令。若 

`Campaign.Current == null

` ?

`ErrorType = "Campaign was not started."

` 并返?false；若 

`Game.Current.CheatMode

` ?false ?

`ErrorType = "Cheat mode is disabled!"

` 并返?false。自定义命令应在第一行就调用此方法。`ref ErrorType

` 是一?out 参数模式的变体——调用方先声明局部变量，传入后根据返回值决定是否使用错误文本?
### CheckParameters

`

`

`csharp
public static bool CheckParameters(List&lt;string&gt; strings, int ParameterCount)
`

`

`

校验参数列表长度是否等于 

`ParameterCount

`。空列表只在 

`ParameterCount == 0

` 时通过。这是统一的参数个数校验入口——自定义命令应先?

`CheckHelp

` 检测帮助请求，再用此方法校验个数，最后解析具体值?
### CheckHelp

`

`

`csharp
public static bool CheckHelp(List&lt;string&gt; strings)
`

`

`

检测用户是否在命令后输入了 

`help

` 关键字（不区分大小写）。若是，命令应返回该命令的用法说明而不是真正执行。这是所有命令的标准帮助协议?
### GetSeparatedNames

`

`

`csharp
public static List&lt;string&gt; GetSeparatedNames(List&lt;string&gt; strings, bool removeEmptySpaces = false)
`

`

`

把可能用引号或下划线连接的多词名称拆分为独立名称列表。`removeEmptySpaces

` ?true 时会移除结果中的空白项。用于处?设置英雄?这类需要复合名称参数的命令?
### ConcatenateString

`

`

`csharp
public static string ConcatenateString(List&lt;string&gt; strings)
`

`

`

把参数列表用空格重新连接成一个字符串。用于处?给英雄添加备?这类把剩余参数整体当作文本的命令?
### ImportMainHero / ExportMainHero

`

`

`csharp
public static string ImportMainHero(List&lt;string&gt; strings)
public static string ExportMainHero(List&lt;string&gt; strings)
`

`

`

`ExportMainHero

` 把主角的捏脸参数、技能、特质、属性等序列化为文本文件；`ImportMainHero

` 从文件读取并应用。常用于在不同存档间迁移角色。返回值是操作结果提示?
### AddSkillXpToHero

`

`

`csharp
public static string AddSkillXpToHero(List&lt;string&gt; strings)
`

`

`

给指定英雄添加指定技能的经验值。参数格式：

`hero_name skill_name xp_amount

`。会查找英雄（按名称匹配）和技能（?

`StringId

` 匹配?

`OneHanded

`），然后调用 

`Hero.SetSkillXp

` / 

`Hero.AddSkillXp

`?
### SetLoyaltyOfSettlement / SetProsperityOfSettlement / SetMilitiaOfSettlement / SetSecurityOfSettlement / SetFoodOfSettlement / SetHearthOfSettlement

`

`

`csharp
public static string SetLoyaltyOfSettlement(List&lt;string&gt; strings)
// 其余 5 个签名相?

`

`

`

一组聚落经济参数设置命令。参数格式：

`settlement_name value

`。分别设置聚落的忠诚度、繁荣度、民兵数、安全度、食物储备、村庄炉灶（hearth）。值会经过 

`IsValueAcceptable

` 范围校验?
### SetHeroCulture / SetClanCulture

`

`

`csharp
public static string SetHeroCulture(List&lt;string&gt; strings)
public static string SetClanCulture(List&lt;string&gt; strings)
`

`

`

改变主角或氏族的文化。参数格式：

`culture_id

`（如 

`empire

`、`vlandia

`）。会触发文化相关的重算（可招募兵种、可用装备等）?
### SetCraftingStamina

`

`

`csharp
public static string SetCraftingStamina(List&lt;string&gt; strings)
`

`

`

设置主角的锻造体力为指定值。绕过正常的时间恢复机制，常用于测试锻造配方?
### ShowSettlements / HideSettlements

`

`

`csharp
public static string ShowSettlements(List&lt;string&gt; strings)
public static string HideSettlements(List&lt;string&gt; strings)
`

`

`

在战役大地图上强制显?隐藏所有聚落图标。用于截图或调试地图可见性逻辑?
## 使用示例

### 示例 1: 添加自定义作弊命?
**场景**: 模组想加一?

`give_gold

` 命令给主角加金币?
`

`

`csharp
public static class MyModCheats
{
    [CommandLineCommandFunction("give_gold")]
    public static string GiveGold(List&lt;string&gt; strings)
    {
        string error = "";
        if (!CampaignCheats.CheckCheatUsage(ref error))
            return error;

        if (CampaignCheats.CheckHelp(strings))
            return "Usage: give_gold &lt;amount&gt;  -- Gives gold to the main hero.";

        if (!CampaignCheats.CheckParameters(strings, 1))
            return "Error: requires exactly 1 parameter (amount).";

        int amount;
        if (!int.TryParse(strings[0], out amount) \|\| amount &lt; 0)
            return "Error: amount must be a non-negative integer.";

        Hero.MainHero.Gold += amount;
        return $"Gave {amount} gold to {Hero.MainHero.Name}. Total: {Hero.MainHero.Gold}";
    }
}
`

`

`

**要点**: 遵循原版的三段式模式（`CheckCheatUsage

` ?

`CheckHelp

` ?

`CheckParameters

`）；?

`[CommandLineCommandFunction]

` 特性登记命令名；返回值会回显到控制台?
### 示例 2: 在自定义逻辑中复用辅助方?
**场景**: 模组的某个调试工具需要找到一个默认聚落作为测试目标?
`

`

`csharp
Settlement target = CampaignCheats.GetDefaultSettlement;
InformationManager.DisplayMessage(
    new InformationMessage($"Default settlement: {target.Name}"));
`

`

`

**要点**: 

`GetDefaultSettlement

` 优先返回主角家乡，没有则随机取一个城镇——比自己写查找逻辑更稳健?
### 示例 3: 批量设置聚落参数

**场景**: 测试模组的经济平衡时，想把所有城镇的繁荣度统一设为固定值?
`

`

`csharp
// 不能直接调用 CampaignCheats.SetProsperityOfSettlement（它是命令适配器）?// 而应直接调用底层 API?foreach (Town town in Town.AllTowns)
{
    town.Prosperity = 5000f;
}
`

`

`

**要点**: 

`CampaignCheats

` 的方法是为控制台交互设计的（解析字符串、返回提示），程序化操作应直接调用战?API（如 

`Town.Prosperity

`）。`CampaignCheats

` 方法本身不是"业务 API"，只?命令入口"?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)