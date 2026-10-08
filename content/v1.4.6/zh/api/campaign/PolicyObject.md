---
title: "PolicyObject"
description: "王国政策（Policy）的定义侧对象：一条政策的名称、描述、日志文案、附加效果文本，以及威权/寡头/平等三种政治倾向的权重。"
---
# PolicyObject

**Namespace:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class PolicyObject : PropertyObject`
**Source:** `TaleWorlds.CampaignSystem/PolicyObject.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`PolicyObject` 是「政策」这一概念在 **定义侧** 的载体。它本身只是一条政策的静态资料：`stringId`、名称、描述、日志文案、附加效果文案，以及三个 float 权重 —— `AuthoritarianWeight`、`OligarchicWeight`、`EgalitarianWeight`（`TaleWorlds.CampaignSystem/PolicyObject.cs:42`、`TaleWorlds.CampaignSystem/PolicyObject.cs:47`、`TaleWorlds.CampaignSystem/PolicyObject.cs:52`）。

它继承自 `PropertyObject`（`TaleWorlds.CampaignSystem/PolicyObject.cs:10`），而 `PropertyObject` 又继承自 `MBObjectBase`（`TaleWorlds.Core/PropertyObject.cs:9`）。基类提供的是「可本地化的命名实体」骨架：`Name`（`TaleWorlds.Core/PropertyObject.cs:25`）、`Description`（`TaleWorlds.Core/PropertyObject.cs:41`）、`GetName()`（`TaleWorlds.Core/PropertyObject.cs:34`），以及两个初始化入口 —— 构造函数 `PropertyObject(string stringId)`（`TaleWorlds.Core/PropertyObject.cs:50`）与 `Initialize(TextObject name, TextObject description)`（`TaleWorlds.Core/PropertyObject.cs:56`）。`PolicyObject` 的 `Initialize` 先调用基类版本，再填充自己新增的字段，最后调用 `base.AfterInitialized()`（该调用点见 `TaleWorlds.CampaignSystem/PolicyObject.cs:66`）。

## 心智模型

把 `PolicyObject` 想成 **政策名册里的一行**，而不是「某个王国当前生效的政策」。区分这两件事是理解这个类最快的路径：

- **定义**：`PolicyObject` —— 定义集合通过 `PolicyObject.All` 暴露（`TaleWorlds.CampaignSystem/PolicyObject.cs:26`）。它的 getter 直接返回 `Campaign.Current.AllPolicies`，而 `AllPolicies` 本身是 `Campaign` 上的 `internal` 属性（`TaleWorlds.CampaignSystem/Campaign.cs:349`）—— 所以「有哪些政策」由 `Campaign` 持有，`PolicyObject.All` 只是它的公开静态入口。
- **实例/状态**：某个王国是否采纳了这条政策，挂在 **Kingdom** 上，不在本类里：`Kingdom.ActivePolicies`（`TaleWorlds.CampaignSystem/Kingdom.cs:640`）给出已采纳的政策，`Kingdom.AddPolicy(PolicyObject)` / `RemovePolicy(PolicyObject)`（`TaleWorlds.CampaignSystem/Kingdom.cs:1037`、`TaleWorlds.CampaignSystem/Kingdom.cs:1046`）是采纳/取消采纳的入口，查询用 `Kingdom.HasPolicy(PolicyObject)`（`TaleWorlds.CampaignSystem/Kingdom.cs:1055`）。因此 `PolicyObject` 上没有「已启用」布尔值可以读；本类能回答的问题只有「这条政策长什么样、叫什么、权重的政治倾向是多少」。

三个权重字段是这条政策的「政治人格」：同一条政策对威权、寡头、平等三种倾向各给一个 float（`TaleWorlds.CampaignSystem/PolicyObject.cs:42`、`TaleWorlds.CampaignSystem/PolicyObject.cs:47`、`TaleWorlds.CampaignSystem/PolicyObject.cs:52`）。它们不是「效果强度」，而是政策在政治光谱上的定位数值，供上层逻辑读取。

`SecondaryEffects` 与 `LogEntryDescription` 都是 `TextObject`（`TaleWorlds.CampaignSystem/PolicyObject.cs:37`、`TaleWorlds.CampaignSystem/PolicyObject.cs:57`），也就是 **未渲染的本地化文本对象**。这意味着它们的值取决于当前语言环境，比较/拼接时应按文本对象处理，而不是当普通字符串。

## 怎么用

### 怎么拿到

遍历/查找政策一律走静态入口：

```csharp
using TaleWorlds.CampaignSystem;

// 全部政策定义（只读列表，内部即 Campaign.Current.AllPolicies）
MBReadOnlyList<PolicyObject> all = PolicyObject.All;
```

`All` 的返回类型是 `MBReadOnlyList<PolicyObject>`（`TaleWorlds.CampaignSystem/PolicyObject.cs:26`），调用方不能往里面加东西 —— 想新增政策不能靠改这个列表。

单个政策的定位键是构造时传入的 `stringId`（`TaleWorlds.CampaignSystem/PolicyObject.cs:60`）。在 `All` 里按 `StringId` 找自己关心的那一条，是本类最常见的读法。

要问「某个王国现在有没有这条政策」，不要去问 `PolicyObject`，去问 `Kingdom`：`Kingdom.HasPolicy(policy)`（`TaleWorlds.CampaignSystem/Kingdom.cs:1055`），已采纳清单读 `Kingdom.ActivePolicies`（`TaleWorlds.CampaignSystem/Kingdom.cs:640`）。

### 典型用法

读取一条政策的全部展示信息：

```csharp
foreach (PolicyObject policy in PolicyObject.All)
{
    // 名称/描述来自基类 PropertyObject
    TextObject name        = policy.Name;
    TextObject description = policy.Description;

    // 本类新增的文本
    TextObject logEntry  = policy.LogEntryDescription;   // 日志文案
    TextObject secondary = policy.SecondaryEffects;      // 附加效果文案

    // 政治倾向权重
    float auth  = policy.AuthoritarianWeight;
    float olig  = policy.OligarchicWeight;
    float egal  = policy.EgalitarianWeight;
}
```

`ToString()` 已被重写为返回 `base.Name.ToString()`（`TaleWorlds.CampaignSystem/PolicyObject.cs:78`），所以把 `PolicyObject` 直接丢进字符串插值或日志里，得到的是政策名称而不是类型名：

```csharp
Debug.Print(policy.ToString()); // 输出政策名称
```

### 坑

- **`PolicyObject` 是定义，不是开关**。本类没有「启用/停用」API：采纳与取消采纳都在 `Kingdom` 上，即 `AddPolicy` / `RemovePolicy`（`TaleWorlds.CampaignSystem/Kingdom.cs:1037`、`TaleWorlds.CampaignSystem/Kingdom.cs:1046`）。因此修改 `PolicyObject` 的字段不会改变任何王国当前的采纳状态。
- **`PolicyObject` 的公开构造可用，但全局注册路径不公开**。构造函数是 `public`（`TaleWorlds.CampaignSystem/PolicyObject.cs:60`），所以可以在自己的代码里 `new` 一个实例并调用 `Initialize`；但把它登记进全局名册的那条路走不通 —— `PolicyObject.All` 只是只读视图（`TaleWorlds.CampaignSystem/PolicyObject.cs:26`），它背后的 `Campaign.AllPolicies` 是 `internal` 且 setter 为 `private`（`TaleWorlds.CampaignSystem/Campaign.cs:349`）。想让自己的政策出现在 `PolicyObject.All` 里，得从战役初始化那条链上入手，而不是在运行时往列表里塞。
- **`Campaign.DefaultPolicies` 同样是 private set**（`TaleWorlds.CampaignSystem/Campaign.cs:289`）：可以读，但不能从外部替换。
- **`Kingdom.ActivePolicies` 的声明类型是 `IList<PolicyObject>`**（`TaleWorlds.CampaignSystem/Kingdom.cs:640`），是可变接口类型而非只读集合；不过要改变采纳状态，应走 `AddPolicy` / `RemovePolicy`（`TaleWorlds.CampaignSystem/Kingdom.cs:1037`、`TaleWorlds.CampaignSystem/Kingdom.cs:1046`），而不是直接操作这个列表。
- **所有业务字段的 setter 都是 `private`**。`SecondaryEffects`、`AuthoritarianWeight`、`OligarchicWeight`、`EgalitarianWeight`、`LogEntryDescription` 全部是 `{ get; private set; }`（`TaleWorlds.CampaignSystem/PolicyObject.cs:37`、`TaleWorlds.CampaignSystem/PolicyObject.cs:42`、`TaleWorlds.CampaignSystem/PolicyObject.cs:47`、`TaleWorlds.CampaignSystem/PolicyObject.cs:52`、`TaleWorlds.CampaignSystem/PolicyObject.cs:57`）。外部代码无法逐字段赋值，唯一写入通道是 `Initialize`（`TaleWorlds.CampaignSystem/PolicyObject.cs:66`）。
- **`Initialize` 是一次性填充，必须成组调用**。它一次接收 `name`、`description`、`logEntryDescription`、`secondaryEffects` 和三档权重共 7 个参数（`TaleWorlds.CampaignSystem/PolicyObject.cs:66`）；想只改其中一个字段，本类没有提供 API。
- **`Initialize` 末尾会调用 `base.AfterInitialized()`**（`TaleWorlds.CampaignSystem/PolicyObject.cs:66`）。也就是说「初始化完成」这个信号是在 `Initialize` 内部发出的，不要绕过 `Initialize` 去手工拼装字段，否则基类的初始化后处理不会触发。
- **`PolicyObject.All` 只是转发到 `Campaign.Current.AllPolicies`**（`TaleWorlds.CampaignSystem/PolicyObject.cs:26`）。在 `Campaign.Current` 尚未建立时访问它不会得到空列表，而是直接抛异常 —— 先确认战役已加载。
- **`AutoGeneratedStaticCollectObjectsPolicyObject` / `AutoGeneratedInstanceCollectObjects` 不是给你用的**。它们是自动生成的序列化收集钩子（`TaleWorlds.CampaignSystem/PolicyObject.cs:13`、`TaleWorlds.CampaignSystem/PolicyObject.cs:19`），前者把 `object` 强转成 `PolicyObject` 后转发给实例方法，后者只调用基类实现。mod 代码不应该调用它们。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `PolicyObject.All` | `public static MBReadOnlyList<PolicyObject> All { get; }` | 全部政策定义的只读列表，getter 返回 `Campaign.Current.AllPolicies` | `TaleWorlds.CampaignSystem/PolicyObject.cs:26` |
| `SecondaryEffects` | `public TextObject SecondaryEffects { get; private set; }` | 该政策的附加效果文案（本地化文本对象），仅由 `Initialize` 写入 | `TaleWorlds.CampaignSystem/PolicyObject.cs:37` |
| `AuthoritarianWeight` | `public float AuthoritarianWeight { get; private set; }` | 该政策在威权倾向上的权重，仅由 `Initialize` 写入 | `TaleWorlds.CampaignSystem/PolicyObject.cs:42` |
| `OligarchicWeight` | `public float OligarchicWeight { get; private set; }` | 该政策在寡头倾向上的权重，仅由 `Initialize` 写入 | `TaleWorlds.CampaignSystem/PolicyObject.cs:47` |
| `EgalitarianWeight` | `public float EgalitarianWeight { get; private set; }` | 该政策在平等倾向上的权重，仅由 `Initialize` 写入 | `TaleWorlds.CampaignSystem/PolicyObject.cs:52` |
| `LogEntryDescription` | `public TextObject LogEntryDescription { get; private set; }` | 该政策写入日志时使用的描述文案，仅由 `Initialize` 写入 | `TaleWorlds.CampaignSystem/PolicyObject.cs:57` |
| 构造函数 | `public PolicyObject(string stringId)` | 以 `stringId` 构造，把 ID 交给基类 `PropertyObject(stringId)` | `TaleWorlds.CampaignSystem/PolicyObject.cs:60` |
| `Initialize` | `public void Initialize(TextObject name, TextObject description, TextObject logEntryDescription, TextObject secondaryEffects, float authoritarianWeight, float oligarchyWeight, float egalitarianWeight)` | 一次性填充名称/描述/日志文案/附加效果与三档权重，最后调用 `base.AfterInitialized()` | `TaleWorlds.CampaignSystem/PolicyObject.cs:66` |
| `ToString` | `public override string ToString()` | 返回 `base.Name.ToString()`，即政策名称 | `TaleWorlds.CampaignSystem/PolicyObject.cs:78` |
| `AutoGeneratedStaticCollectObjectsPolicyObject` | `internal static void AutoGeneratedStaticCollectObjectsPolicyObject(object o, List<object> collectedObjects)` | 自动生成的静态收集入口，把参数强转为 `PolicyObject` 后转发到实例方法 | `TaleWorlds.CampaignSystem/PolicyObject.cs:13` |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 自动生成的实例收集钩子，仅调用基类实现 | `TaleWorlds.CampaignSystem/PolicyObject.cs:19` |

## 真实示例

**示例 1：按 ID 找一条政策并读出它的三档权重**

```csharp
using TaleWorlds.CampaignSystem;

PolicyObject target = null;
foreach (PolicyObject p in PolicyObject.All)
{
    if (p.StringId == "policy_some_id")   // StringId 来自基类 PropertyObject
    {
        target = p;
        break;
    }
}

if (target != null)
{
    Debug.Print($"威权={target.AuthoritarianWeight} 寡头={target.OligarchicWeight} 平等={target.EgalitarianWeight}");
}
```

**示例 2：为调试打印全部政策及其附加效果文案**

```csharp
foreach (PolicyObject p in PolicyObject.All)
{
    // ToString() 返回名称，LogEntryDescription / SecondaryEffects 是 TextObject
    Debug.Print($"{p} | {p.LogEntryDescription} | {p.SecondaryEffects}");
}
```

**示例 3：新政策的字段只能在 `Initialize` 里一次给全**

```csharp
// 构造只需 stringId（TaleWorlds.CampaignSystem/PolicyObject.cs:60），
// 其余字段一次性通过 Initialize 提供（TaleWorlds.CampaignSystem/PolicyObject.cs:66）。
var policy = new PolicyObject("my_mod_policy_id");
policy.Initialize(
    name: new TextObject("我的政策"),
    description: new TextObject("说明文本"),
    logEntryDescription: new TextObject("日志文本"),
    secondaryEffects: new TextObject("附加效果文本"),
    authoritarianWeight: 1f,
    oligarchyWeight: 0f,
    egalitarianWeight: 0f);
// 注意：字段 setter 是 private（TaleWorlds.CampaignSystem/PolicyObject.cs:37、
// TaleWorlds.CampaignSystem/PolicyObject.cs:42、TaleWorlds.CampaignSystem/PolicyObject.cs:47、
// TaleWorlds.CampaignSystem/PolicyObject.cs:52、TaleWorlds.CampaignSystem/PolicyObject.cs:57），
// 之后无法再单独修改其中任何一项。
```

## 参见

- [PropertyObject](../../core-extra/PropertyObject) —— 本类的基类，提供 `StringId` / `Name` / `Description` 与 `Initialize`、`AfterInitialized` 骨架。
- [Campaign](../Campaign) —— `PolicyObject.All` 的数据源 `Campaign.Current.AllPolicies` 的持有者。
- [Kingdom](../Kingdom) —— 政策生效的归属方，王国一侧的状态与定义侧分离。
- [Clan](../Clan)
- [Hero](../Hero)
- [Settlement](../Settlement)
- [CampaignEvents](../CampaignEvents)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [PerkObject](../PerkObject) —— 同样是「定义侧」对象，可与本类对照理解。
- [ExplainedNumber](../ExplainedNumber)
- [Game](../../core-extra/Game)
- [MBObjectBase](../../campaign-ext/MBObjectBase)

## 导航

- 上级索引：[campaign API 索引](../_index)
- 同桶页面：[Campaign](../Campaign) · [Kingdom](../Kingdom) · [Clan](../Clan) · [Hero](../Hero) · [Settlement](../Settlement) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [PerkObject](../PerkObject) · [ExplainedNumber](../ExplainedNumber)
- 相关基类：[PropertyObject](../../core-extra/PropertyObject) · [MBObjectBase](../../campaign-ext/MBObjectBase) · [Game](../../core-extra/Game)
