---
title: MapNavigationExtensions
description: MapNavigationExtensions - 大地图导航栏视图切换扩展方法
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNavigationExtensions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNavigationExtensions
**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem.ViewModelCollection
**类型:** static class

## 概述
`MapNavigationExtensions

` 是一组扩展方法，为实现了 

`INavigationHandler

` 接口的对象（通常是地图屏幕的 ViewModel）提供便捷的视图切换功能。它封装?获取导航元素→打开视图"的两步操作，让调用者可以通过 

`handler.OpenQuests()

`、`handler.OpenInventory()

` 等简洁调用打开对应的游戏面板?
## 心智模型
该类?

`INavigationHandler

` 与具体导航元素之间的适配层。`GetElement

` 方法?

`MapNavigationItemType

` 枚举映射为字符串键（?

`Party

` ?

`"party"

`），再通过 

`handler.GetElement(text)

` 获取实际?

`INavigationElement

`。每?

`OpenXxx

` 方法都是?

`GetElement(...).OpenView()

` 的包装，可接受可选参数（如指定英雄、定居点、家族等）传给目标视图?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| ?\| - \| 静态扩展类，无属?\|

## 主要方法
### GetPermission
`

`

`csharp
public static NavigationPermissionItem GetPermission(this INavigationHandler handler, MapNavigationItemType elementType)
`

`

`
获取指定导航类型的权限项?
### IsActive
`

`

`csharp
public static bool IsActive(this INavigationHandler handler, MapNavigationItemType elementType)
`

`

`
判断指定导航类型当前是否处于激活状态?
### OpenQuests
`

`

`csharp
public static void OpenQuests(this INavigationHandler handler)
public static void OpenQuests(this INavigationHandler handler, QuestBase quest)
public static void OpenQuests(this INavigationHandler handler, IssueBase issue)
public static void OpenQuests(this INavigationHandler handler, JournalLogEntry log)
`

`

`
打开任务面板。可选参数指定跳转到特定任务、问题或日志条目?
### OpenInventory
`

`

`csharp
public static void OpenInventory(this INavigationHandler handler)
`

`

`
打开背包面板?
### OpenParty
`

`

`csharp
public static void OpenParty(this INavigationHandler handler)
`

`

`
打开部队面板?
### OpenCharacterDeveloper
`

`

`csharp
public static void OpenCharacterDeveloper(this INavigationHandler handler)
public static void OpenCharacterDeveloper(this INavigationHandler handler, Hero hero)
`

`

`
打开角色发展面板。可选参数指定查看特定英雄?
### OpenKingdom
`

`

`csharp
public static void OpenKingdom(this INavigationHandler handler)
public static void OpenKingdom(this INavigationHandler handler, Army army)
public static void OpenKingdom(this INavigationHandler handler, Settlement settlement)
public static void OpenKingdom(this INavigationHandler handler, Clan clan)
public static void OpenKingdom(this INavigationHandler handler, PolicyObject policy)
public static void OpenKingdom(this INavigationHandler handler, IFaction faction)
public static void OpenKingdom(this INavigationHandler handler, KingdomDecision decision)
`

`

`
打开王国面板。多种重载支持跳转到军团、定居点、家族、政策、阵营或决议详情?
### OpenClan
`

`

`csharp
public static void OpenClan(this INavigationHandler handler)
public static void OpenClan(this INavigationHandler handler, Hero hero)
public static void OpenClan(this INavigationHandler handler, PartyBase party)
public static void OpenClan(this INavigationHandler handler, Settlement settlement)
public static void OpenClan(this INavigationHandler handler, Workshop workshop)
public static void OpenClan(this INavigationHandler handler, Alley alley)
`

`

`
打开家族面板。重载支持跳转到英雄、部队、定居点、工坊或据点详情?
### OpenEscapeMenu
`

`

`csharp
public static void OpenEscapeMenu(this INavigationHandler handler)
`

`

`
打开退出菜单?
## 使用示例
### 示例: 在地图屏幕中打开家族面板
**场景**: mod 添加的自定义通知点击后需要跳转到家族面板的特定英雄?

`

`

`csharp
public class MyMapNotificationHandler
{
    private INavigationHandler _navigationHandler;
    
    public void OnNotificationClicked(Hero targetHero)
    {
        // 使用扩展方法直接打开家族面板并定位到英雄
        _navigationHandler.OpenClan(targetHero);
    }
    
    public void OpenKingdomDecisions(KingdomDecision pendingDecision)
    {
        // 打开王国面板并跳转到指定决议
        _navigationHandler.OpenKingdom(pendingDecision);
    }
}
`

`

`
**要点**: 调用方必须持有实现了 

`INavigationHandler

` 的对象（通常?

`MapScreen

` 或其 ViewModel）；所有方法都是无返回值的 fire-and-forget 调用；若导航类型不支持会触发 

`Debug.FailedAssert

`?
## 参见
- [完整类目录](../catalog-campaign)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
