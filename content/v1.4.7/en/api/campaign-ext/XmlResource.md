---
title: "XmlResource"
description: "XmlResource — class in TaleWorlds.ObjectSystem. 8 public members (8 static)."
---

<!-- v147-skeleton -->
# XmlResource

**Namespace:** `TaleWorlds.ObjectSystem`  
**Module:** `TaleWorlds.ObjectSystem`  
**Type:** `public static class XmlResource`  
**Source:** `TaleWorlds.ObjectSystem/XmlResource.cs`

## Overview

`XmlResource` is a named type in the TaleWorlds.ObjectSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (8): `ReadXsdFileAndExtractInformation`, `GetFullXPathOfElement`, `InitializeXmlInformationList`, `GetMbprojxmls`, `GetXmlListAndApply`, `XmlInformationList`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetFullXPathOfElement` | method (static) | Static entry point. Takes 2 arguments: `XElement element`, `bool isXsd`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetMbprojxmls` | method (static) | Static entry point. Takes 1 argument: `string moduleName`. Read path: prefer it over reaching for the backing store. |
| `GetXmlListAndApply` | method (static) | Static entry point. Takes 1 argument: `string moduleName`. Read path: prefer it over reaching for the backing store. |
| `InitializeXmlInformationList` | method (static) | Static entry point. Takes 1 argument: `List<MbObjectXmlInformation> xmlInformation`. |
| `MbprojXmls` | property (static) | Static entry point `List<MbObjectXmlInformation>` property. Read it for current state; a declared setter writes that state in place. |
| `ReadXsdFileAndExtractInformation` | method (static) | Static entry point. Takes 1 argument: `string xsdFilePath`. |
| `XmlInformationList` | property (static) | Static entry point `List<MbObjectXmlInformation>` property. Read it for current state; a declared setter writes that state in place. |
| `XsNamespace` | property (static) | Static entry point `XNamespace` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Static entry points on XmlResource:
XmlResource.ReadXsdFileAndExtractInformation(xsdFilePath);
XmlResource.GetFullXPathOfElement(element, isXsd);
XmlResource.InitializeXmlInformationList(xmlInformation);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.ObjectSystem/XmlResource.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ModuleHelper](../../modulemanager/ModuleHelper/) — `TaleWorlds.ModuleManager`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
