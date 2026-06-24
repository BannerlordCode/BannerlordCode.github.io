
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PolicyObject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PolicyObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** public sealed class PolicyObject : PropertyObject
**Base:** `PropertyObject`
**File:** `TaleWorlds.CampaignSystem/PolicyObject.cs`

## 概述

`PolicyObject` 表示一项王国政策（影响王国机制的生效/未生效法律）。所有政策可通过静态 `All` 列表访问，通常来自 XML。mod 查询某王国已激活政策（`Kingdom.ActivePolicies`），增删以改变王国行为。

## 心智模型

先把 `PolicyObject` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 主要属性

\| Name \| Signature \|
\|------\|-----------\|
\| `All` \| `public static MBReadOnlyList&lt;PolicyObject&gt; All { get { return Campaign.Current.AllPolicies; }` \|

## 主要方法

### Initialize
```csharp
public void Initialize(TextObject name, TextObject description, TextObject logEntryDescription, TextObject secondaryEffects, float authoritarianWeight, float oligarchyWeight, float egalitarianWeight)
```

### ToString
```csharp
public override string ToString()
```

## 使用示例

```csharp
// 按 id 找一项政策，并检查玩家王国是否已激活
PolicyObject policy = PolicyObject.All.FirstOrDefault(p => p.StringId == "demesne_rights");
Kingdom k = Clan.PlayerClan.Kingdom;
if (policy != null && k != null)
{
    bool active = k.ActivePolicies.Contains(policy);
    InformationManager.DisplayMessage(new InformationMessage(
        $"{policy.Name} 在 {k.Name} 中{(active ? "已激活" : "未激活")}"));
}
```

## 参见

- [完整类目录](../catalog)