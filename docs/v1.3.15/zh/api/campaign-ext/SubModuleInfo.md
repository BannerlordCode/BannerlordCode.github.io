<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SubModuleInfo`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SubModuleInfo

**命名空间:** TaleWorlds.ModuleManager
**模块:** TaleWorlds.ModuleManager
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SubModuleInfo` 是 `TaleWorlds.ModuleManager` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `DLLName` | `public string DLLName { get; }` |
| `DLLPath` | `public string DLLPath { get; }` |
| `IsTWCertifiedDLL` | `public bool IsTWCertifiedDLL { get; }` |
| `DLLExists` | `public bool DLLExists { get; }` |
| `Assemblies` | `public List<string> Assemblies { get; }` |
| `SubModuleClassTypeName` | `public string SubModuleClassTypeName { get; }` |


## 主要方法

### LoadFrom

```csharp
public void LoadFrom(XmlNode subModuleNode, string path, bool isOfficial)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)