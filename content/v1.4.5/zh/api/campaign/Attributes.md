---
title: "Attributes"
description: "角色属性（力/敏捷/智力）清单的唯一公开入口：把 Campaign 的内部 AllCharacterAttributes 以 MBReadOnlyList<CharacterAttribute> 暴露给 mod。英雄存档、属性点分配、技能成长都遍历它。"
---

# Attributes

**Namespace:** `TaleWorlds.CampaignSystem.Extensions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class Attributes`
**Base:** 无（静态类）
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/Attributes.cs`

## 概述

`Attributes` 整个类只有一行有意义的代码：

```csharp
public static MBReadOnlyList<CharacterAttribute> All => Campaign.Current.AllCharacterAttributes;
```

它的存在意义是**可见性**。[Campaign](../Campaign) 上的 `AllCharacterAttributes` 是 `internal`（`Campaign.cs:326`，赋值在 `Campaign.cs:1156` 的 `MBObjectManager.Instance.GetObjectTypeList<CharacterAttribute>()`）。mod 拿不到那个成员，所以官方提供了一个 public 的静态门面。它不是「属性的容器」——它是**「Campaign 持有的那份属性清单的公开只读视图」**，每次读属性都重新走一遍 `Campaign.Current`。

在体系里它承担的是**「角色三维属性的枚举基准」**这一环。所有需要「把所有属性跑一遍」的地方都经它：[CharacterData](../CharacterData) 类的角色序列化按 `Attributes.All.Count` 开数组并逐个写 `hero.GetAttributeValue(Attributes.All[k])`；`EducationCampaignBehavior` 按它分配属性点与计算成长。它与同层的 [Skills](../Skills) / [PerkObject](../PerkObject) 全局集合是并列关系，但**只有它的底层成员在 Campaign 上是 internal**，所以只有它值得单独存在。

`All` 返回的是 `MBReadOnlyList<CharacterAttribute>`——**只读**。想给英雄加一个新属性条目，正确路径是往 XML 的 `CharacterAttributes` 里加定义让它出现在 `MBObjectManager` 的类型列表里，而不是试图往这个列表里 `Add`。

## 心智模型

把它当成**「`MBObjectManager` 的类型列表在角色属性这一格上的公开投影」**就对了。

- **它是一次属性访问，不是一个常量。** `All` 是表达式属性（expression-bodied），每次读都解引用 `Campaign.Current`。**`Campaign.Current` 为 null 时直接 NRE**——主菜单、模块 `OnSubModuleLoad` 阶段、读档完成之前都不能读。
- **顺序即索引。** `CharacterData` 用 `Attributes.All[k]` 的下标去开 `PropertyObjectData[]`。也就是说「某个英雄的 Vocation 排在第几位」这件事，在读档/写档时靠列表顺序对齐。**自定义属性时追加到 XML 末尾是最安全的做法**；插入到中间会让同一份存档里新旧角色的属性数组错位。
- **列表内容来自 `MBObjectManager`，不是 Campaign 手工维护。** 也就是说它跟着物品/角色 XML 的加载结果走，mod 往 XML 里加一个 `CharacterAttribute` 定义，它就会出现在 `All` 里，不需要注册代码。
- **不要缓存成静态字段。** 读档会重建 `Campaign` 及其类型列表；跨读档持有旧的 `MBReadOnlyList` 会指向已脱离世界的对象。想省事就在每次使用时现读。
- **它与 `Hero.HeroDeveloper.UnspentAttributePoints` 配对使用。** 点数在英雄身上，清单在这里。

### 典型用法形状

| 你要做什么 | 怎么用 `Attributes.All` |
| --- | --- |
| 把一个英雄的三维导出成文本 | `foreach (CharacterAttribute attr in Attributes.All)` + `hero.GetAttributeValue(attr)` |
| 找某个 StringId 的属性对象 | 线性查找 `attr.StringId`，**不要按固定下标** |
| 按难度给英雄加属性点 | 遍历两次：先求当前总和，再决定加多少 |
| 复制一个英雄的属性到另一个 | 逐属性 `target.SetAttributeValue(attr, source.GetAttributeValue(attr))`（写路径走 `HeroDeveloper`，见风险小节） |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `All` | `public static MBReadOnlyList<CharacterAttribute> All => Campaign.Current.AllCharacterAttributes` | 唯一的成员。返回当前战役里全部 `CharacterAttribute` 定义的只读列表。**底层 `Campaign.AllCharacterAttributes` 是 internal，这个门面是 mod 唯一的合法入口**。每次访问重新解引用 `Campaign.Current`，不是缓存值。 |

## 怎么用

这是一个只有一行有效代码的静态门面，全文唯一的成员就是那个 `All` 属性。存在的意义是给你一个不用写 `using TaleWorlds.CampaignSystem;` 就能拿到角色属性全集的入口，同时避免和 .NET 的 `System.Attribute` 撞名。

**怎么拿到它**：声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/Attributes.cs:6`，是一个 `public static class`，唯一成员在 `:8`：`All => Campaign.Current.AllCharacterAttributes`。它不做任何过滤或转换，就是把 `Campaign.Current` 上的集合原样透出，所以每次访问都会重新求值。

真正的数据在 [Campaign](../Campaign) 的 `AllCharacterAttributes` 上，这个门面的价值在于把访问点收敛成一处。引擎内部的消费方分布很广，可以按用途分成四组：存档侧是 `CharacterData.cs:152` 与 `:169`（把属性数组按 `StringId` 和英雄当前值写进存档），成长侧是 `HeroDeveloper.cs:296` 与 `:466`、以及 `DefaultCharacterDevelopmentModel.cs:270` 与 `:292`，教育侧是 `EducationCampaignBehavior.cs:1024`–`:1028`，角色创建侧是 `CharacterCreationContent.cs:159`。

```csharp
MBReadOnlyList<CharacterAttribute> all = TaleWorlds.CampaignSystem.Extensions.Attributes.All;
Debug.Print("属性总数=" + all.Count, 0);
foreach (CharacterAttribute attr in all)
{
    int playerValue = Hero.MainHero.GetAttributeValue(attr);
    Debug.Print(attr.StringId + " 玩家当前值=" + playerValue, 0);
}
// 找出哪些英雄在某项属性上达到了满值
foreach (CharacterAttribute attr in all)
{
    int max = Hero.AllAliveHeroes.Max(h => h.GetAttributeValue(attr));
    Debug.Print(attr.StringId + " 全图存活英雄最高=" + max + " 是否满值=" + (max >= 1000), 0);
}
```

这个门面只读。写属性要走 [Hero](../Hero) 上的 `SetAttributeValue` 或对应的 `ChangeHeroAttributeAction`，属性值本身带存档序列化，直接改集合元素不会生效。

**最常见的坑**：这个类型叫 `Attributes`，和 .NET 反射命名空间里的 `Attribute` 只差一个 s，很容易在 `using TaleWorlds.CampaignSystem.Extensions;` 之后与自己的属性辅助类撞名。写全限定名 `TaleWorlds.CampaignSystem.Extensions.Attributes.All` 最省事。

## 真实示例

把一个英雄的三维属性导成一行文本（形状取自 `CharacterData` 里的序列化写法）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Extensions;

public static string DescribeAttributes(Hero hero)
{
    if (hero == null || Campaign.Current == null)
    {
        return "";
    }

    System.Text.StringBuilder builder = new System.Text.StringBuilder();
    for (int i = 0; i < Attributes.All.Count; i++)
    {
        CharacterAttribute attribute = Attributes.All[i];
        int value = hero.GetAttributeValue(attribute);
        builder.Append(attribute.StringId).Append("=").Append(value).Append(" ");
    }

    return builder.ToString();
}
```

按 StringId 查一个属性对象，**不要依赖固定下标**（XML 里插入新条目会移动下标）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Extensions;

public static int GetVocation(Hero hero)
{
    if (hero == null || Campaign.Current == null)
    {
        return 0;
    }

    foreach (CharacterAttribute attribute in Attributes.All)
    {
        if (attribute.StringId == "vocation")
        {
            return hero.GetAttributeValue(attribute);
        }
    }

    return 0;
}
```

给英雄加属性点后立刻读回，确认写路径生效（写走 `HeroDeveloper`，不要直接改内部数组）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.Extensions;

Hero target = Hero.MainHero;
if (target != null && Campaign.Current != null && target.HeroDeveloper != null)
{
    int unspent = target.HeroDeveloper.UnspentAttributePoints;
    int total = 0;
    for (int i = 0; i < Attributes.All.Count; i++)
    {
        total += target.GetAttributeValue(Attributes.All[i]);
    }

    Debug.Print("unspent=" + unspent + " total=" + total, 0);
}
```

## 风险与边界

- **`Campaign.Current` 为 null 直接 NRE。** 这是本类型唯一的崩溃点，且没有任何保护。它必须在战役已创建之后才可读。
- **底层成员是 internal。** 不要试图反射或写 `Campaign.Current.AllCharacterAttributes`——编译不过。用 `Attributes.All` 就够了，这也是它存在的全部理由。
- **顺序敏感。** 序列化路径按 `Attributes.All` 的下标写数组。自定义 `CharacterAttribute` 时**追加到 XML 列表末尾**；插在中间会让同一存档中不同角色的属性数组错位。
- **列表随 MBObjectManager 变化。** 加载了不同的 XML 集合（模组自带物品包）就会得到不同长度的列表。任何 `int[]` / `List<>` 的初始化都必须用 `Attributes.All.Count` 而不是写死数字。
- **不要缓存成静态字段。** 读档会重建 `Campaign` 与其类型列表，旧的 `MBReadOnlyList` 引用会指向已脱离世界的对象。
- **读取永远安全，写入要小心。** `GetAttributeValue` 在英雄的 `_characterAttributes` 为 null 时返回 0（有 null 保护），但写路径必须走 `Hero.HeroDeveloper` 的正式接口，绕过它会破坏存档一致性。
- **静态类，不可实例化也不可继承。** 它是 `public static class`，没有构造器，也没有隐式实例化路径。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/Attributes.cs` 是 9 行原始源码，两条 `using` 加一个表达式属性。跨版本比对的关键不是这个文件，而是 `Campaign.cs` 上 `AllCharacterAttributes` 的**可访问性**：如果某个版本把它从 `internal` 改成 `public`，这个门面就成了冗余；如果改回 `private`，mod 就彻底失去属性枚举能力——那才是需要警惕的破坏性变更。

## 依赖关系

- 唯一数据来源：[Campaign](../Campaign) 的 `internal MBReadOnlyList<CharacterAttribute> AllCharacterAttributes`，在 Campaign 初始化时由 `MBObjectManager.Instance.GetObjectTypeList<CharacterAttribute>()` 填充
- 元素类型：[CharacterAttribute](../../core-extra/CharacterAttribute) 是 Core 层的 `MBObjectBase` 子类，`StringId` 与 `Name` 来自基类
- 返回容器：`MBReadOnlyList<T>`（定义在 `TaleWorlds.Library` 命名空间），**不可修改**，任何增删都必须改 XML
- 典型消费者：[Hero](../Hero) 的 `GetAttributeValue(CharacterAttribute)` / `HeroDeveloper`，以及角色序列化路径按 `All.Count` 开数组
- 同层并列集合：`Skills.All` / `PerkObject.All` / `TraitObject.All` 是同一种「全局定义清单」模式，但只有属性这一格的 Campaign 成员是 internal
- 基类参照：[MBObjectBase](../../core/MBObjectBase) 提供的 `StringId` 与 `Id`
- 桶首页：[campaign API 分区](../)
