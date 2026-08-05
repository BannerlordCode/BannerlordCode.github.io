---
title: "LocationComplexTemplate"
description: "LocationComplexTemplate 是由 XML 和对象系统加载的地点图定义，Settlement 据此构建运行时 LocationComplex。"
---
# LocationComplexTemplate

**命名空间:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public sealed class LocationComplexTemplate : MBObjectBase`  
**基类:** [MBObjectBase](../../core/MBObjectBase)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/LocationComplexTemplate.cs`

## 一句话职责

它解析 `LocationComplexTemplates` XML 对象，保存地点节点模板和字符串通道对，供 [Settlement](../Settlement) 创建活动的 [LocationComplex](../LocationComplex)。

## 心智模型

这是数据定义边界，不是活动定居点图。`Locations` 保存模板 `Location` 对象，此时它们还没有 owner complex；`Passages` 保存诸如 `center` 和 `tavern` 的字符串 ID 对。[LocationComplex](../LocationComplex) 构造时复制这些节点并解析通道 ID，形成运行时图。

加载链是明确的：`Campaign` 向 `MBObjectManager` 注册 `LocationComplexTemplate`，`SandBoxManager.InitializeSandboxXMLs` 加载 `LocationComplexTemplates`，`Settlement.Deserialize` 读取 `complex_template` 引用。新战役定居点从模板构造 complex；保存战役则调用 `LocationComplex.Initialize`，再应用定居点专属场景覆盖。因此 mod 应有意识地扩展 XML/数据管线，不要把模板当成某个定居点的运行时状态来修改。

## 何时使用，何时不要使用

- Sandbox XML 初始化后，使用 `MBObjectManager.GetObjectTypeList<LocationComplexTemplate>()` 或对象系统的类型查找来检查已加载定义。
- 使用模板理解一个定居点 complex 可以包含哪些地点 ID、场景变体、访问表达式和通道对。
- 运行时角色和场景操作应使用 [Settlement](../Settlement).`LocationComplex`；模板不是 `LocationComplex.Current` 返回的对象。
- 不要手动调用 `Deserialize`，也不要用任意 null 图构造模板 `Location`，然后期待它变成活动节点。
- 活动遭遇战期间不要修改 `Locations` 或 `Passages`。已有 complex 已经复制数据，修改源对象不会安全地重建它们。

## 依赖关系

```text
Campaign.RegisterType<LocationComplexTemplate>
  -> SandBoxManager.LoadXML("LocationComplexTemplates")
  -> Settlement XML 中的 MBObjectManager 对象引用
  -> LocationComplexTemplate.Deserialize
  -> new LocationComplex(template) / LocationComplex.Initialize(template)
  -> Settlement.LocationComplex
```

- 对象系统：[MBObjectBase](../../core/MBObjectBase) 和 [MBObjectManager](../../campaign-ext/MBObjectManager) 负责注册与查找。
- 运行时图：[LocationComplex](../LocationComplex) 复制地点并解析通道。
- 节点数据：[Location](../Location) 接收名称、访问表达式、繁荣度上限、室内标志和四个场景名称。
- 战役持有者：[Settlement](../Settlement) 读取模板引用，并应用每个定居点的覆盖值。
- Mission 消费者：[CampaignMission](../CampaignMission) 和 [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) 使用由模板产生的活动图，而不是模板本身。

## 解析成员与 XML 契约

| 成员或输入 | 含义 |
|---|---|
| `Locations` | 模板节点公开列表。每个 `<Location>` 提供 `id`、`name`、`max_prosperity`、`indoor`、`player_can_enter`、`player_can_see`、`ai_can_exit`、`ai_can_enter` 以及最多四个场景名属性。 |
| `Passages` | 由 `<Passages><Passage location_1="center" location_2="tavern" /></Passages>` 产生的 `(location_1, location_2)` 字符串对。活动 complex 解析两个 ID 后建立双向链接。 |
| `Deserialize` | 调用 `MBObjectBase.Deserialize`，解析子 XML，构造模板 `Location`，并记录通道对。它是对象系统生命周期代码，不是运行时刷新方法。 |
| 可选场景名 | `scene_name`、`scene_name_1`、`scene_name_2` 和 `scene_name_3` 被保存为四个槽位；缺失属性变为空字符串，活动 `Location` 在需要时回退到槽位 `0`。 |
| 访问表达式 | `player_can_*` 和 `ai_can_*` 值是由 `Location` 通过反射解析的方法名，必须对应已加载程序集中的真实委托。 |

## 真实示例

Campaign 加载 Sandbox XML 后，可以通过真实对象管理器检查已注册的模板：

```csharp
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Library;
using TaleWorlds.ObjectSystem;

MBReadOnlyList<LocationComplexTemplate> templates =
    MBObjectManager.Instance.GetObjectTypeList<LocationComplexTemplate>();

foreach (LocationComplexTemplate template in templates)
{
    int locationCount = template.Locations.Count;
    int passageCount = template.Passages.Count;
}
```

运行时链路并不止于检查。`Settlement.Deserialize` 读取 `complex_template` 引用，然后在新战役中调用 `new LocationComplex(complexTemplate)`，或在保存战役中调用 `LocationComplex.Initialize(complexTemplate)`，之后再应用定居点专属场景属性。

## 风险与存档边界

- XML 缺少必需属性时，`Deserialize` 可能抛出异常；缺失 `node.Attributes` 会产生 `TWXmlLoadException`，格式错误的值则可能在解析时失败。
- 指向不存在地点的通道对不是有效运行时图边；`LocationComplex` 在调用 `AddPassage` 前会解析两个 ID。
- 访问表达式字符串是可执行的查找元数据。重命名或移除引用的静态方法，可能导致 XML 已加载但稍后调用 `Location.Can*` 时失败。
- 模板对象描述共享源数据。定居点已经构造 complex 后，再修改公开列表不会回写已有 complex，却可能让之后的构造结果不一致。
- 保存战役会分别重建 `LocationComplex` 并应用覆盖值。不要把临时 Agent、场景或 Mission 引用放入模板，也不要把模板当成存档槽位。

## 版本说明

本页依据 v1.4.5 的 `LocationComplexTemplate.cs`、`Campaign` 类型注册、`SandBoxManager.InitializeSandboxXMLs` 和 `Settlement.Deserialize` 编写。XML 属性名、对象系统 ID 以及保存战役初始化方式都可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[Location](../Location) · [LocationComplex](../LocationComplex) · [LocationCharacter](../LocationCharacter)
- 相关：[Settlement](../Settlement) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [MBObjectBase](../../core/MBObjectBase) · [CampaignMission](../CampaignMission)
