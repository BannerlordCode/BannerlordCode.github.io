---
title: PropertyBasedTooltipVM
description: PropertyBasedTooltipVM - 属性列表型工具提示视图模型，按属流行刷?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PropertyBasedTooltipVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyBasedTooltipVM
**命名空间:** TaleWorlds.Core.ViewModelCollection.Information
**模块:** TaleWorlds.Core.ViewModelCollection
**类型:** class（继承自 

`TooltipBaseVM

`?
## 概述
`PropertyBasedTooltipVM

` ?Bannerlord 中最通用的工具提示视图模型，用于在鼠标悬停时显示一?属性名—属性?键值对。游戏内绝大多数悬停提示（角色属性、物品属性、聚落信息等）都通过它驱动。它维护一?

`MBBindingList&lt;TooltipProperty&gt;

`，每?

`TooltipProperty

` 可以是静态字符串、`Func&lt;string&gt;

` 延迟求值、带颜色的属性或修饰值属性?
工具提示支持"扩展?（`IsExtended

`）：某些属性标记为 

`OnlyShowWhenExtended

` ?

`OnlyShowWhenNotExtended

`，当用户按住扩展键（默认 Alt）时切换显示集。周期性刷新（默认?2 秒）会调用每?

`TooltipProperty

` ?

`RefreshDefinition

` / 

`RefreshValue

`，使?

`Func&lt;string&gt;

` 的属性能反映最新状态（如当前血量、剩余天数）?
## 心智模型
?

`PropertyBasedTooltipVM

` 看作"键值对列表 + 扩展开?+ 周期刷新"。外部通过 

`AddProperty

` / 

`AddColoredProperty

` / 

`AddModifierProperty

` 累积属性行；`RefreshGenericPropertyBasedTooltip

` 是一个静态回调，?

`TooltipBaseVM.InvokeRefreshData

` 触发，根?

`IsExtended

` 过滤属性行并填充列表。`Mode

` 字段（`TooltipMode

` 枚举）控制提示的视觉风格（DefaultGame/DefaultCampaign/Ally/Enemy/War）?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`TooltipPropertyList

` \| 

`MBBindingList&lt;TooltipProperty&gt;

` \| 属性行绑定列表 \|
\| 

`Mode

` \| 

`int

` \| 提示模式（对?

`TooltipMode

` 枚举?\|

## 主要方法
### AddProperty
`

`

`csharp
public void AddProperty(string definition, string value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = None)
public void AddProperty(string definition, Func&lt;string&gt; value, int textHeight = 0, ...)
public void AddProperty(Func&lt;string&gt; definition, Func&lt;string&gt; value, int textHeight = 0, ...)
`

`

`
添加一行属性，支持静态字符串?

`Func&lt;string&gt;

` 延迟求值?
### AddModifierProperty
`

`

`csharp
public void AddModifierProperty(string definition, int modifierValue, int textHeight = 0, ...)
`

`

`
添加修饰值属性，正值显示为 

`+N

`，负值显示为 

`-N

`?
### AddColoredProperty
`

`

`csharp
public void AddColoredProperty(string definition, string value, Color color, int textHeight = 0, ...)
public void AddColoredProperty(string definition, Func&lt;string&gt; value, Color color, int textHeight = 0, ...)
public void AddColoredProperty(Func&lt;string&gt; definition, Func&lt;string&gt; value, Color color, int textHeight = 0, ...)
`

`

`
添加带颜色的属性行；若 

`color == Colors.Black

` 则退化为普通属性?
### AddKeyType / GetKeyText
`

`

`csharp
public static void AddKeyType(string keyID, Func&lt;string&gt; getKeyText)
public string GetKeyText(string keyID)
`

`

`
注册/查询按键文本（用于在提示中显??X 键做 Y"），由外部模块在初始化时注册?
### RefreshGenericPropertyBasedTooltip
`

`

`csharp
public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object[] args)
`

`

`
静态刷新回调：?

`args[0]

` ?

`List&lt;TooltipProperty&gt;

`，按 

`OnlyShowWhenExtended

` / 

`OnlyShowWhenNotExtended

` 过滤后填充到提示列表?
## 使用示例
### 示例: 构造一个角色属性提?**场景**: 鼠标悬停在角色头像上时显示其属?

`

`

`csharp
var tooltip = new PropertyBasedTooltipVM(typeof(HeroTooltipFetcher), new object[] { hero });
// 内部 Refresh() 会调用注册的 fetcher，fetcher 通常这样写：
public static void FillTooltip(PropertyBasedTooltipVM vm, object[] args)
{
    var hero = (Hero)args[0];
    vm.AddProperty("姓名", hero.Name.ToString());
    vm.AddProperty("等级", () =&gt; hero.Level.ToString()); // 动态求?    vm.AddColoredProperty("关系", () =&gt; hero.GetRelation(Hero.MainHero).ToString(),
        color: hero.GetRelation(Hero.MainHero) &gt;= 0 ? Colors.Green : Colors.Red);
}
`

`

`
**要点**: 标记 

`OnlyShowWhenExtended = true

` 的属性行只在按住 Alt 时显示。`_periodicRefreshDelay

` 默认 2 秒，可通过基类字段调整刷新频率?
## 参见
- [完整类目录](../catalog-core)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
